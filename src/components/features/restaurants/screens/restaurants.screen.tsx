import { useState } from 'react';

import styled from 'styled-components/native';
import { Theme } from '../../../../infrastructure/theme';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

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

  return (
    <>
      <SearchContainer>
        <Searchbar placeholder='Search' onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
      <RestaurantList
        data={[{ name: '1' }, { name: '2' }, { name: '3' }]}
        keyExtractor={(item) => item.name}
        renderItem={() => (
          <Spacer position='bottom' size='medium'>
            <RestaurantInfoCard restaurant={{}} />
          </Spacer>
        )}
      />
    </>
  );
};
