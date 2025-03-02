//
// This file defines the Stack Navigator for navigation within the Map screen, allowing users to transition
// from a compact preview of a restaurant to detailed information.
//

import {
  createStackNavigator, // function to set up the foundation for stack-based navigation.
  TransitionPresets, // pre-defined configurations for screen transition animations within the Stack Navigator.
} from '@react-navigation/stack';

import { MapStackParamList } from '../../types/navigation';

import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';

const MapStack = createStackNavigator<MapStackParamList>();

export const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS, // mimic the modal presentation style seen on iOS.
      }}>
      <MapStack.Screen name='MapView' component={MapScreen} />
      <MapStack.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} />
    </MapStack.Navigator>
  );
};
