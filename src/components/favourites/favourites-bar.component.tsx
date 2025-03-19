//
// Component to display a horizontal scrollable list of favourite restaurants.
//

import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { RestaurantsStackScreenProps } from '../../types/navigation';
import type { Restaurant } from '../../types/restaurant';

import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';
import { RestaurantInfoCompact } from '../restaurant/restaurant-info-compact.component';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({
  favourites,
  onNavigate, // function to navigate to RestaurantDetailsScreen.
}: {
  favourites: Restaurant[];
  onNavigate: RestaurantsStackScreenProps<'RestaurantsList'>['navigation']['navigate'];
}) => {
  // if there are no favourites, don't show anything.
  if (!favourites.length) {
    return null;
  }

  return (
    <>
      <FavouritesWrapper>
        <Spacer position='left' size='large'>
          <Text variant='caption' style={{ color: 'white' }}>
            Favourites
          </Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => (
            <Spacer key={restaurant.name} position='left' size='medium'>
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetails', {
                    restaurant,
                  })
                }>
                <RestaurantInfoCompact restaurant={restaurant} isMap={false} />
              </TouchableOpacity>
            </Spacer>
          ))}
        </ScrollView>
      </FavouritesWrapper>
    </>
  );
};
