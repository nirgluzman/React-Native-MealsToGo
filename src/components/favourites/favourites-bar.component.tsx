//
// Component to display a horizontal scrollable list of favorite restaurants.
//

import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import type { Restaurant } from '../../types/restaurant';

import { Spacer } from '../spacer/spacer.component';
import { RestaurantInfoCompact } from '../restaurant/restaurant-info-compact.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites }: { favourites: Restaurant[] }) => {
  return (
    <>
      {favourites.length > 0 && (
        <FavouritesWrapper>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favourites.map((restaurant) => (
              <Spacer key={restaurant.name} position='left' size='medium'>
                <RestaurantInfoCompact restaurant={restaurant} isMap={false} />
              </Spacer>
            ))}
          </ScrollView>
        </FavouritesWrapper>
      )}
    </>
  );
};
