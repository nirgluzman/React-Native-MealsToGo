import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import {
  SafeAreaProvider, // https://github.com/th3rdwave/react-native-safe-area-context#safeareaprovider
  SafeAreaView, // render content within the safe area boundaries of a device.
} from 'react-native-safe-area-context';

import { RestaurantsScreen } from './src/components/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <RestaurantsScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
