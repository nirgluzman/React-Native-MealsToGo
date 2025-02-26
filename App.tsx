import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import {
  SafeAreaProvider, // https://github.com/th3rdwave/react-native-safe-area-context#safeareaprovider
  SafeAreaView, // render content within the safe area boundaries of a device.
} from 'react-native-safe-area-context';

// Bottom Tabs Navigator
import { NavigationContainer, type RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icon sets, https://expo.github.io/vector-icons/
// library is installed by default on the template project.
import { Ionicons } from '@expo/vector-icons';

// Google Fonts
// https://docs.expo.dev/develop/user-interface/fonts/#with-usefonts-hook-1
// https://github.com/expo/google-fonts
import { useFonts } from 'expo-font';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';

import {
  ThemeProvider, // wrapper component for theming support (provides a theme to all React components underneath itself via the context API).
} from 'styled-components/native';

import { theme } from './src/infrastructure/theme';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';

import { RestaurantsScreen } from './src/components/features/restaurants/screens/restaurants.screen';
import { MapScreen } from './src/components/features/map/screens/map.screen';
import { SettingsScreen } from './src/components/features/settings/screens/settings.screen';

// typecheck for route name and params.
// https://reactnavigation.org/docs/typescript/
type TabParamList = {
  Restaurants: undefined; // specifying undefined means that the route doesn't have params.
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

export default function App() {
  // load custom fonts.
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  // check if the fonts haven't finished loading yet.
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <ThemeProvider theme={theme}>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
                <Tab.Screen name='Map' component={MapScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
