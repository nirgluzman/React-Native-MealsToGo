//
// service layer that sits between the UI components and the data source.
//

import axios from 'axios';
import camelize from 'camelize'; // recursively transform key strings to camel-case.

import { type LocationMockKeys, type LocationMockData } from './mock/locations'; // mock data

// function to fetch mock location data from a predefined set of locations.
export const locationRequest = async (searchTerm: LocationMockKeys) => {
  const response = await axios.get(
    // To access the computer's localhost from an Android emulator, we use the special IP address 10.0.2.2,
    // which is an alias to the host machine's loopback interface (localhost).
    // https://stackoverflow.com/questions/5528850/how-do-you-connect-localhost-in-the-android-emulator
    `http://10.0.2.2:5001/mealstogo-452418/us-central1/geocode?city=${searchTerm}`
  );

  return response.data;
};

// function to extract latitude and longitude from location results.
export const locationTransform = ({ results }: { results: LocationMockData['results'] }) => {
  const { geometry } = camelize(results)[0]; // convert all property names to camelCase format.
  const { lat, lng } = geometry.location;
  const { viewport } = geometry;

  return { center: { lat, lng }, viewport };
};
