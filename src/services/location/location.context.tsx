//
// React context for location data, including fetching and managing the location, loading state, and any errors.
//

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';

import { locationRequest, locationTransform } from './location.service';

import type { Location } from '../../types/location';

import { AuthContext } from '../auth/auth.context';

// define the context value type
type LocationContextType = {
  location: Location | null;
  keyword: string;
  search: (keyword: string) => void;
  isLoading: boolean;
  error: Error | null;
};

// create context with proper typing and default value
export const LocationContext = createContext<LocationContextType>({
  location: {
    center: { lat: 0, lng: 0 },
    viewport: { northeast: { lat: 0, lng: 0 }, southwest: { lat: 0, lng: 0 } },
  },
  keyword: '',
  search: () => {},
  isLoading: false,
  error: null,
});

export const LocationContextProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [keyword, setKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // obtain idToken from AuthContext for location fetch.
  const { idToken } = useContext(AuthContext);

  const onSearch = (searchKeyword: string) => {
    // skip if searchKeyword is empty.
    if (!searchKeyword.length) {
      return;
    }

    // skip if searchKeyword is identical to the current keyword (case-insensitive, trailing spaces ignored).
    if (searchKeyword.toLowerCase().trimEnd() === keyword.toLowerCase()) {
      return;
    }

    // remove trailing spaces from search keyword.
    setKeyword(searchKeyword.trimEnd());
  };

  useEffect(
    () => {
      setIsLoading(true); // data is being fetched.
      setLocation(null);
      setError(null);

      // fetch location data using an immediately invoked async function expression (IIFE).
      (async () => {
        try {
          const response = await locationRequest(keyword.toLowerCase(), idToken); // API request to fetch restaurant data.
          const data = locationTransform(response) as Location; // format and enrich the data from the API.
          setLocation(data);
        } catch (err) {
          // handle error if API request fails.
          setError(err instanceof Error ? err : new Error(String(err)));
        } finally {
          setIsLoading(false); // data fetching process is complete (success or error).
        }
      })();
    },

    // execute location search whenever the keyword state changes.
    [keyword, idToken]
  );

  return (
    <LocationContext.Provider
      value={{
        location,
        keyword,
        search: onSearch,
        isLoading,
        error,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
