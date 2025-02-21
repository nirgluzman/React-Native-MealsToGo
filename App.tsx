import { useState } from 'react';

import { StatusBar } from 'expo-status-bar'; // control the status bar (the top bar of the screen that shows battery, time, etc.)
import {
  SafeAreaProvider, // https://github.com/th3rdwave/react-native-safe-area-context#safeareaprovider
  SafeAreaView, // render content within the safe area boundaries of a device.
} from 'react-native-safe-area-context';

import { StyleSheet, Text, View } from 'react-native';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.search}>
          <Searchbar placeholder='Search' onChangeText={setSearchQuery} value={searchQuery} />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
