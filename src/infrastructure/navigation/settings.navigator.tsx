import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { SettingsStackParamList } from '../../types/navigation';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <SettingsStack.Screen name='Profile' component={SettingsScreen} />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
      <SettingsStack.Screen name='RestaurantDetails' component={RestaurantDetailsScreen} />
    </SettingsStack.Navigator>
  );
};
