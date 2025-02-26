import { useContext } from 'react';

import styled from 'styled-components/native';
import { theme } from '../../../infrastructure/theme';

import {
  ActivityIndicator, // present progress of some activity in the app.
} from 'react-native-paper';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Search } from '../components/search.component';
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

const RestaurantList = styled.FlatList.attrs({
  // we're using styled-components to create a styled component from FlatList.
  // attrs() is a helper function provided by styled-components that allow us to configure props of the underlying component (not CSS styles).
  contentContainerStyle:
    // FlatList prop which applies on the scroll view content container (the container which wraps all of the child views).
    { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={theme.colors.ui.success} size={50} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        keyExtractor={(item: any) => item.name}
        renderItem={({ item }: { item: any }) => (
          <Spacer position='bottom' size='medium'>
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};
