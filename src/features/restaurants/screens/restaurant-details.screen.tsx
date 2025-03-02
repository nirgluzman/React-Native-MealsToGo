import { useState } from 'react';

import styled from 'styled-components/native';

import {
  List, // expandable list component, https://callstack.github.io/react-native-paper/docs/components/List/ListAccordion/
} from 'react-native-paper';

// typecheck for screens - annotate the route props received by a screen.
import type { RestaurantDetailsScreenProps } from '../../../types/navigation';

import { theme, type Theme } from '../../../infrastructure/theme';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const MenuScrollView = styled.ScrollView`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.bg.primary};
  border-radius: 10px;
`;

export const RestaurantDetailsScreen = ({ route }: RestaurantDetailsScreenProps) => {
  const { restaurant } = route.params;

  // accordion expansion states
  const [breakfastExpanded, setBreakfastExpanded] = useState<boolean>(false);
  const [lunchExpanded, setLunchExpanded] = useState<boolean>(false);
  const [dinnerExpanded, setDinnerExpanded] = useState<boolean>(false);
  const [drinksExpanded, setDrinksExpanded] = useState<boolean>(false);

  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuScrollView showsVerticalScrollIndicator={true}>
        <List.Accordion
          style={{ backgroundColor: theme.colors.bg.quaternary }}
          title='Breakfast' // title text for the list accordion.
          left={(props) => <List.Icon {...props} icon='bread-slice' />} // React element to display on the left side; https://callstack.github.io/react-native-paper/docs/guides/icons/#configuring-icons
          expanded={breakfastExpanded} // determine if the accordion is expanded.
          onPress={() => setBreakfastExpanded((prev) => !prev)} // toggle expansion state.
        >
          <List.Item title='Eggs Benedict' />
          <List.Item title='Classic Breakfast' />
          <List.Item title='Pancakes' />
        </List.Accordion>
        <List.Accordion
          style={{ backgroundColor: theme.colors.bg.quaternary }}
          title='Lunch' // title text for the list accordion.
          left={(props) => <List.Icon {...props} icon='hamburger' />} // React element to display on the left side; https://callstack.github.io/react-native-paper/docs/guides/icons/#configuring-icons
          expanded={lunchExpanded} // determine if the accordion is expanded.
          onPress={() => setLunchExpanded((prev) => !prev)} // toggle expansion state.
        >
          <List.Item title='Burger w/ Fries' />
          <List.Item title='Steak Sandwich' />
          <List.Item title='Mushroom Soup' />
        </List.Accordion>
        <List.Accordion
          style={{ backgroundColor: theme.colors.bg.quaternary }}
          title='Dinner' // title text for the list accordion.
          left={(props) => <List.Icon {...props} icon='food-variant' />} // React element to display on the left side; https://callstack.github.io/react-native-paper/docs/guides/icons/#configuring-icons
          expanded={dinnerExpanded} // determine if the accordion is expanded.
          onPress={() => setDinnerExpanded((prev) => !prev)} // toggle expansion state.
        >
          <List.Item title='Spaghetti Bolognese' />
          <List.Item title='Chicken Curry' />
          <List.Item title='Dumplings' />
          <List.Item title='Sushi' />
        </List.Accordion>
        <List.Accordion
          style={{ backgroundColor: theme.colors.bg.quaternary }}
          title='Drinks' // title text for the list accordion.
          left={(props) => <List.Icon {...props} icon='cup' />} // React element to display on the left side; https://callstack.github.io/react-native-paper/docs/guides/icons/#configuring-icons
          expanded={drinksExpanded} // determine if the accordion is expanded.
          onPress={() => setDrinksExpanded((prev) => !prev)} // toggle expansion state.
        >
          <List.Item title='Water' />
          <List.Item title='Soda' />
          <List.Item title='Juice' />
          <List.Item title='Coke' />
          <List.Item title='Beer' />
        </List.Accordion>
      </MenuScrollView>
    </>
  );
};
