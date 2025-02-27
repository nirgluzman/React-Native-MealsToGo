import { useState, useContext } from 'react';

import styled from 'styled-components/native';
import { theme, type Theme } from '../../../infrastructure/theme';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

export const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword); // search keyword state, initially set to the context keyword.

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        onChangeText={setSearchKeyword}
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)} // search function is called when the user submits the search query (the user presses the "Enter" or "Return" key on their keyboard).
        onIconPress={() => search(searchKeyword)} // search function is called when the user presses the search icon.
        onClearIconPress={() => setSearchKeyword('')} // clear the search query when the user presses the clear icon.
        style={{ backgroundColor: theme.colors.bg.tertiary }}
      />
    </SearchContainer>
  );
};
