//
// React context for location data, including fetching and managing the location, loading state, and any errors.
//

import { useState, createContext, ReactNode } from 'react';

import { locationRequest, locationTransform } from './location.service';

import type { Location } from '../../types/location';

// define the context value type
type LocationContextType = {
  location: Location | null;
  search: (keyword: string) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
};

// create context with proper typing and default value
export const LocationContext = createContext<LocationContextType>({
  location: { lat: 0, lng: 0 },
  search: () => Promise.resolve(),
  isLoading: false,
  error: null,
});

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const getLocation = async (searchKeyword: string) => {
    // skip if search keyword is empty.
    if (!searchKeyword.length) {
      return;
    }

    setLocation(null);
    setIsLoading(true); // data is being fetched.
    setError(null);

    try {
      const response = await locationRequest(searchKeyword.toLowerCase() as any); // API request to fetch restaurant data.
      const data = locationTransform(response as any) as Location; // format and enrich the data from the API.
      setLocation(data);
    } catch (err) {
      // handle error if API request fails.
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false); // data fetching process is complete (success or error).
    }
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        search: getLocation,
        isLoading,
        error,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
