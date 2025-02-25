import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import {
  SafeAreaProvider, // https://github.com/th3rdwave/react-native-safe-area-context#safeareaprovider
  SafeAreaView, // render content within the safe area boundaries of a device.
} from 'react-native-safe-area-context';

// Bottom Tabs Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

import { RestaurantsScreen } from './src/components/features/restaurants/screens/restaurants.screen';
import { MapScreen } from './src/components/features/map/screens/map.screen';
import { SettingsScreen } from './src/components/features/settings/screens/settings.screen';

const Tab = createBottomTabNavigator();

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
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style='auto' />
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
              <Tab.Screen name='Map' component={MapScreen} />
              <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
