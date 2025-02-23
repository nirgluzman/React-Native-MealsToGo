import { useState } from 'react';

import styled from 'styled-components/native';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchContainer = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  padding: ${(props: any) => props.theme.space[3]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
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
