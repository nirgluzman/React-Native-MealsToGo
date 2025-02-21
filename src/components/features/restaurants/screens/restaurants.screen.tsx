import { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import {
  Searchbar, // input box where users can type search queries.
} from 'react-native-paper';

import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <View style={styles.search}>
        <Searchbar placeholder='Search' onChangeText={setSearchQuery} value={searchQuery} />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
