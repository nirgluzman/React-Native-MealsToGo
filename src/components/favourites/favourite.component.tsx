//
// Favourite component (heart icon) to toggle favourite status and update favorites list via context.
//

import { useContext } from 'react';

import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // icon sets, https://icons.expo.fyi/I

import styled from 'styled-components/native';

import type { Restaurant } from '../../types/restaurant';
import { FavouritesContext } from '../../services/favourites/favourites.context';

// styled TouchableOpacity for the favourite button, positioned in the top-right corner.
// z-index determines which overlapping element appears on top.
const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }: { restaurant: Restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  // Check if the restaurant is in the favourites list.
  // The '??' operator (nullish coalescing operator) provides a default value (false) when the left-hand side is null or undefined,
  // ensuring that 'isFavourite' is always a boolean value, even if the 'favourites' array is empty or the restaurant isn't found.
  const isFavourite = favourites.find((fav) => fav.placeId === restaurant.placeId) ?? false;

  return (
    <>
      <FavouriteButton
        onPress={() =>
          isFavourite ? removeFromFavourites(restaurant) : addToFavourites(restaurant)
        }>
        <AntDesign
          name={isFavourite ? 'heart' : 'hearto'}
          color={isFavourite ? 'red' : 'white'}
          size={24}
        />
      </FavouriteButton>
    </>
  );
};
