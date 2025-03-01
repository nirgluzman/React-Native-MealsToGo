import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components/native';
import { theme, type Theme } from '../../../infrastructure/theme';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;
//
// position: absolute;
// place the SearchContainer at a specific location on the screen, regardless of the layout of other elements.
//
// z-index: 999;
// z-index determines which element appears on top when elements overlap. Higher z-index values are stacked on top of lower values.
// 999 is a very high z-index value, ensuring that the SearchContainer will appear on top of almost any other element on the screen.
//

export const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword); // search keyword state, initially set to the context keyword.

  // synchronize the local searchKeyword state with the keyword value from the LocationContext.
  // if the keyword value in the LocationContext is updated from a different screen (e.g. Restaurants), this useEffect hook ensures
  // that the searchKeyword state in this Search component is automatically updated to reflect that change.
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        icon='map-search-outline' // name of the icon, see: https://callstack.github.io/react-native-paper/docs/guides/icons/
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
