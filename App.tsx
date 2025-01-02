import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // render content within the safe area boundaries of a device.

import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
