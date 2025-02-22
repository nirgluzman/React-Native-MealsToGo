import { useState } from 'react';

import styled from 'styled-components/native';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <SearchContainer>
        <Searchbar placeholder='Search' onChangeText={setSearchQuery} value={searchQuery} />
      </SearchContainer>
      <RestaurantsListContainer>
        <RestaurantInfoCard restaurant={{}} />
      </RestaurantsListContainer>
    </>
  );
};
