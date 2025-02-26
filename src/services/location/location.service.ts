// service layer that sits between the UI components and the data source.

import camelize from 'camelize'; // recursively transform key strings to camel-case.

import { locations, type LocationMockKeys, type LocationMockData } from './mock/locations'; // mock data

// function to fetch mock location data from a predefined set of locations.
export const locationRequest = (searchTerm: LocationMockKeys) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('location not found');
    }
    resolve(locationMock);
  });
};

// function to extract latitude and longitude from location results.
export const locationTransform = ({ results }: { results: LocationMockData['results'] }) => {
  const { geometry } = camelize(results)[0]; // convert all property names to camelCase format.
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
