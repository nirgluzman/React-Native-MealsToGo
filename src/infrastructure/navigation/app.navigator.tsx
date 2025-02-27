//
// This file defines the Bottom Tab Navigation structure of the app, connecting the main feature screens (Restaurants, Map, Settings).
//

// Bottom Tabs Navigator
import { NavigationContainer, type RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icon sets, https://expo.github.io/vector-icons/
// library is installed by default on the template project.
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../theme';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

// typecheck for route name and params.
// https://reactnavigation.org/docs/typescript/
type TabParamList = {
  Restaurants: undefined; // specifying 'undefined' means that the route doesn't have params.
  Map: undefined;
  Settings: undefined;
};

// we tell our navigator to use typecheck by passing it as a generic.
const Tab = createBottomTabNavigator<TabParamList>();

// typecheck for screens - annotate the route props received by a screen.
type RouteProps = RouteProp<TabParamList>;

// define the icon mapping for the bottom tab navigator.
const iconMap: Record<keyof TabParamList, keyof typeof Ionicons.glyphMap> = {
  Restaurants: 'restaurant',
  Map: 'map-outline',
  Settings: 'settings',
} as const;

const screenOptions = ({ route }: { route: RouteProps }) => {
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
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
