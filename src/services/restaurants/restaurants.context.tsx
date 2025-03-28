//
// React context for restaurant data, including fetching and managing the list of restaurants, loading state, and any errors.
//

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

import type { Restaurant } from '../../types/restaurant';

import { AuthContext } from '../auth/auth.context';
import { LocationContext } from '../location/location.context';

// define the context value type.
type RestaurantsContextType = {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: Error | null;
};

// create context with proper typing and default value.
export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // obtain idToken from AuthContext for restaurant fetch.
  const { idToken } = useContext(AuthContext);

  // obtain location from LocationContext for restaurant fetch - make restaurant fetching location-aware.
  const { location } = useContext(LocationContext);

  useEffect(() => {
    // fetch restaurant data using an immediately invoked async function expression (IIFE).
    (async () => {
      // skip if location or coordinates are missing.
      if (!location?.center.lat || !location?.center.lng) {
        return;
      }

      // create location string from coordinates.
      const { lat, lng } = location.center;
      const locationString = `${lat},${lng}`;

      setIsLoading(true); // display a loading indicator to the user while the data is being fetched.
      setRestaurants([]);
      setError(null);
      try {
        const response = await restaurantsRequest(locationString, idToken); // API request to fetch restaurants data (Google Places Nearby Search API).
        const data = restaurantsTransform(response); // format and enrich the data from the API.
        setRestaurants(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false); // data fetching process is complete (success or error).
      }
    })();

    // execute restaurant search whenever the location state changes.
  }, [location, idToken]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
