import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components/native';
import { theme, type Theme } from '../../../infrastructure/theme';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

export const Search = ({
  isFavouritesToggled,
  onFavouritesToggle,
}: {
  isFavouritesToggled: boolean;
  onFavouritesToggle: () => void;
}) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword); // search keyword state, initially set to the context keyword.

  // synchronize the local searchKeyword state with the keyword value from the LocationContext.
  // if the keyword value in the LocationContext is updated from a different screen, this useEffect hook ensures
  // that the searchKeyword state in this Search component is automatically updated to reflect that change.
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        onChangeText={setSearchKeyword}
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)} // search function is called when the user submits the search query (the user presses the "Enter" or "Return" key on their keyboard).
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle} // when the heart icon is pressed, toggle the display of the user's favorites.
        onClearIconPress={() => setSearchKeyword('')} // clear the search query when the user presses the clear icon.
        style={{ backgroundColor: theme.colors.bg.primary }}
      />
    </SearchContainer>
  );
};
