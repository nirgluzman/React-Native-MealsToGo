//
// React Context to manage the user's list of favorite restaurants.
//

import { useState, useEffect, useContext, createContext, type ReactNode } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Restaurant } from '../../types/restaurant';
import { AuthContext } from '../auth/auth.context';

// define the context value type.
type FavouritesContextType = {
  favourites: Restaurant[]; // user's favorites list.
  addToFavourites: (restaurant: Restaurant) => void; // add a restaurant to user's favorites.
  removeFromFavourites: (restaurant: Restaurant) => void; // remove a restaurant from user's favorites.
};

// create context with proper typing and default value.
export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Restaurant[]>([]);
  const { user } = useContext(AuthContext);

  // add a restaurant to user's favorites.
  const add = (restaurant: Restaurant) => {
    setFavourites((prev) => [...prev, restaurant]);
  };

  // remove a restaurant from user's favorites.
  const remove = (restaurant: Restaurant) => {
    const newFavourites = favourites.filter((fav) => fav.placeId !== restaurant.placeId);
    setFavourites(newFavourites);
  };

  // Load the user's favorite restaurants from persistent storage when the component first mounts.
  // This ensures that favorites are restored after the app is closed and reopened.
  useEffect(() => {
    // retrieve the stored favourites data from AsyncStorage.
    const loadFavourites = async (uid: string) => {
      try {
        const value = await AsyncStorage.getItem(`@favourites-${uid}`);
        if (value !== null) {
          setFavourites(JSON.parse(value));
        }
      } catch (err) {
        console.log('error loading favourites', err);
      }
    };

    // load the favourites data for the current user.
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  // Save the user's favorite restaurants to persistent storage whenever the favorites list changes.
  // This ensures that any changes to favorites are persisted.
  useEffect(() => {
    // convert the current favourites array into a JSON string and store it in AsyncStorage.
    const saveFavourites = async (value: Restaurant[], uid: string) => {
      try {
        await AsyncStorage.setItem(`@favourites-${uid}`, JSON.stringify(value)); // store favorites with user UID in AsyncStorage key.
      } catch (err) {
        console.log('error saving favourites', err);
      }
    };

    // save the favourites data for the current user.
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
