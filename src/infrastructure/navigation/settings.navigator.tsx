import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

import { SettingsStackParamList } from '../../types/navigation';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import { CameraScreen } from '../../features/settings/screens/camera.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // gestureDirection: 'horizontal',
        ...TransitionPresets.ModalPresentationIOS, // mimic the modal presentation style seen on iOS.
      }}>
      <SettingsStack.Screen name='Profile' component={SettingsScreen} />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
      <SettingsStack.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} />
      <SettingsStack.Screen name='Camera' component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
