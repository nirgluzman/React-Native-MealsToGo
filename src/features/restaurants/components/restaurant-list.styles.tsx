import styled from 'styled-components/native';

export const RestaurantList = styled.FlatList.attrs({
  // we're using styled-components to create a styled component from FlatList.
  // attrs() is a helper function provided by styled-components that allow us to configure props of the underlying component (not CSS styles).
  contentContainerStyle:
    // FlatList prop which applies on the scroll view content container (the container which wraps all of the child views).
    { padding: 16 },
})``;
