//
// service layer that sits between the UI components and the data source.
//

import axios from 'axios';
import camelize from 'camelize'; // recursively transform key strings to camel-case.

import { type MockKeys, type MockData } from './mock'; // mock data

import type { Restaurant } from '../../types/restaurant';

// function to fetch mock restaurant data based on a location.
export const restaurantsRequest = async (location: MockKeys) => {
  const response = await axios.get(
    // To access the computer's localhost from an Android emulator, we use the special IP address 10.0.2.2,
    // which is an alias to the host machine's loopback interface (localhost).
    // https://stackoverflow.com/questions/5528850/how-do-you-connect-localhost-in-the-android-emulator
    `http://10.0.2.2:5001/mealstogo-452418/us-central1/placesNearby?location=${location}`
  );

  return response.data;
};

// function to format and enrich the restaurant data.
export const restaurantsTransform = ({ results = [] }: { results: MockData['results'] }) => {
  const mappedResults = results.map((restaurant: any) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  // use the camelize library to convert all property names to camelCase format.
  return camelize(mappedResults) as Restaurant[];
};
