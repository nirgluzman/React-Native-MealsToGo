//
// This file defines the Bottom Tab Navigation structure of the app, connecting the main feature screens (Restaurants, Map, Settings).
// This Navigator allows users to switch between exploring restaurants, viewing the map, and accessing app settings.
// https://reactnavigation.org/docs/bottom-tab-navigator/
//

// Bottom Tab Navigator (Root)
import {
  createBottomTabNavigator,
  type BottomTabOptionsArgs,
  type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

// icon sets, https://expo.github.io/vector-icons/
// library is installed by default on the template project.
import { Ionicons } from '@expo/vector-icons';

import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';

import { theme } from '../theme';

import type { RootTabParamList } from '../../types/navigation';

import { RestaurantsNavigator } from './restaurants.navigator';
import { MapNavigator } from './map.navigator';

import { SettingsScreen } from '../../features/settings/screens/settings.screen';

// we tell our navigator to use typecheck by passing it as a generic.
// this will provide type checking and intelliSense for props of the Navigator and Screen components.
const RestaurantsTab = createBottomTabNavigator<RootTabParamList>();

// define the icon mapping for the bottom tab navigator.
const iconMap: Record<keyof RootTabParamList, keyof typeof Ionicons.glyphMap> = {
  Restaurants: 'restaurant',
  Map: 'map-outline',
  Settings: 'settings',
} as const;

const screenOptions = ({
  route,
}: BottomTabOptionsArgs<RootTabParamList>): BottomTabNavigationOptions => {
  // https://reactnavigation.org/docs/typescript/#annotating-options-and-screenoptions
  return {
    headerShown: false, // hide the header for all screens.
    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
      const iconName = iconMap[route.name];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.colors.ui.active, // tab is active (currently selected).
    tabBarInactiveTintColor: theme.colors.ui.inactive, // inactive tabs.
  };
};

export const AppNavigator = () => {
  // Place context providers in AppNavigator to guarantee context updates upon user authentication state changes.
  // This ensures context memory is cleaned when a user logs out.
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <FavouritesContextProvider>
          <RestaurantsTab.Navigator screenOptions={screenOptions}>
            <RestaurantsTab.Screen name='Restaurants' component={RestaurantsNavigator} />
            <RestaurantsTab.Screen name='Map' component={MapNavigator} />
            <RestaurantsTab.Screen name='Settings' component={SettingsScreen} />
          </RestaurantsTab.Navigator>
        </FavouritesContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
};
