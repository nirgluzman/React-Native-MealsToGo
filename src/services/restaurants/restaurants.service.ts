// service layer that sits between the UI components and the data source.

import camelize from 'camelize'; // recursively transform key strings to camel-case.

import { mocks, mockImages, type MockKeys, type MockData } from './mock'; // mock data

import type { Restaurant } from '../../types/restaurant';

// function to fetch mock restaurant data based on a location.
export const restaurantsRequest = (location: MockKeys = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('location not found');
    }
    resolve(mock as MockData);
  });
};

// function to format and enrich the restaurant data.
export const restaurantsTransform = ({ results = [] }: { results: MockData['results'] }) => {
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = [mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]];
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
