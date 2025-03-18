import { useState, useContext } from 'react';

import styled from 'styled-components/native';
import { theme } from '../../../infrastructure/theme';

import {
  ActivityIndicator, // present progress of some activity in the app.
} from 'react-native-paper';

import type { RestaurantsStackScreenProps } from '../../../types/navigation';
import type { Restaurant } from '../../../types/restaurant';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { FadeInView } from '../../../components/animations/fade.animation';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Pressable } from '../../../components/button/pressable.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';

import { Search } from '../components/search.component';
import { RestaurantList } from '../components/restaurant-list.styles';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

// styled component based on the ActivityIndicator.
// adjusts the left margin to center the element.
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({
  navigation,
}: RestaurantsStackScreenProps<'RestaurantsList'>) => {
  const [displayFavourites, setDisplayFavourites] = useState<boolean>(false);

  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      {isLoading && (
        // display loading indicator during data fetch.
        <LoadingContainer>
          <Loading animating={true} color={theme.colors.ui.quaternary} size={50} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={displayFavourites}
        onFavouritesToggle={() => setDisplayFavourites((prev) => !prev)}
      />
      {displayFavourites && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        keyExtractor={(item: Restaurant) => item.placeId}
        renderItem={({ item }: { item: Restaurant }) => (
          <Pressable
            onPress={() => {
              navigation.navigate('RestaurantDetails', {
                restaurant: item,
              });
            }}>
            <Spacer position='bottom' size='large'>
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
