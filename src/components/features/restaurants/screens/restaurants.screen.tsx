import { useState, useContext } from 'react';

import styled from 'styled-components/native';
import { Theme } from '../../../../infrastructure/theme';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

import { Spacer } from '../../../spacer/spacer.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  // we're using styled-components to create a styled component from FlatList.
  // attrs() is a helper function provided by styled-components that allow us to configure props of the underlying component (not CSS styles).
  contentContainerStyle:
    // FlatList prop which applies on the scroll view content container (the container which wraps all of the child views).
    { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <SearchContainer>
        <Searchbar placeholder='Search' onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
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
