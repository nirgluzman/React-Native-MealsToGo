//
// React Context to manage the user's list of favorite restaurants.
//

import { useState, createContext, type ReactNode } from 'react';

import { Restaurant } from '../../types/restaurant';

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

  // add a restaurant to user's favorites.
  const add = (restaurant: Restaurant) => {
    setFavourites((prev) => [...prev, restaurant]);
  };

  // remove a restaurant from user's favorites.
  const remove = (restaurant: Restaurant) => {
    const newFavourites = favourites.filter((fav) => fav.placeId !== restaurant.placeId);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
