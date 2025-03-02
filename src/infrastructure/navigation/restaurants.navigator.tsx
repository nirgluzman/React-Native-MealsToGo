//
// This file defines the Stack Navigator for navigation within the Restaurants screen, allowing users to transition
// from a list of restaurants to detailed information about a selected restaurant.
// https://reactnavigation.org/docs/stack-navigator/
//

import {
  createStackNavigator, // function to set up the foundation for stack-based navigation.
  TransitionPresets, // pre-defined configurations for screen transition animations within the Stack Navigator.
} from '@react-navigation/stack';

import type { RestaurantsStackParamList } from '../../types/navigation';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';

// we tell our navigator to use typecheck by passing it as a generic.
// this will provide type checking and intelliSense for props of the Navigator and Screen components.
const RestaurantStack = createStackNavigator<RestaurantsStackParamList>();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS, // mimic the modal presentation style seen on iOS.
      }}>
      <RestaurantStack.Screen name='RestaurantsList' component={RestaurantsScreen} />
      <RestaurantStack.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} />
    </RestaurantStack.Navigator>
  );
};
