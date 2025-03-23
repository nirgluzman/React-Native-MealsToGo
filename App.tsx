//
// Root component of the MealsToGo application (entry point for the application).
//

import { useCallback, useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import {
  SafeAreaProvider, // https://github.com/th3rdwave/react-native-safe-area-context#safeareaprovider
  SafeAreaView, // render content within the safe area boundaries of a device.
} from 'react-native-safe-area-context';

import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen'; // library to control the visibility behavior of native splash screen.

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

import { Navigation } from './src/infrastructure/navigation';

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Splash screen animation options.
SplashScreen.setOptions({
  duration: 400, // the duration of the fade out animation in milliseconds.
  fade: true, // whether to hide the splash screen with a fade out animation (only for iOS).
});

export default function App() {
  // load custom fonts.
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  // state variable to control the rendering of the main application content and the hiding of the splash screen.
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    // check if the fonts have finished loading.
    if (fontsLoaded) {
      setTimeout(() => setAppIsReady(true), 2000);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      // hide splash screen, https://docs.expo.dev/versions/latest/sdk/splash-screen
      SplashScreen.hide();
    }
  }, [appIsReady]);

  // prevent the main application content from rendering until all async tasks (font loading, splash screen delay) are resolved.
  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <View onLayout={onLayoutRootView} />
            <Navigation />
          </AuthContextProvider>
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
