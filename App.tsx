//
// Root component of the MealsToGo application (entry point for the application).
//

import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import {
  SafeAreaProvider, // https://github.com/th3rdwave/react-native-safe-area-context#safeareaprovider
  SafeAreaView, // render content within the safe area boundaries of a device.
} from 'react-native-safe-area-context';

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

import { AuthContextProvider } from './src/services/auth/auth.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

import { Navigation } from './src/infrastructure/navigation';

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
          <AuthContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <FavouritesContextProvider>
                  <Navigation />
                </FavouritesContextProvider>
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
