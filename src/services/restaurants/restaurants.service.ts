//
// service layer that sits between the UI components and the data source.
//

import axios from 'axios';
import camelize from 'camelize'; // recursively transform key strings to camel-case.

import type { Restaurant } from '../../types/restaurant';
import { placesNearbyUrl } from '../../utils/api.config';

// function to fetch restaurants data based on a location.
export const restaurantsRequest = async (location: string, idToken: string | null) => {
  // check if the idToken is null or undefined.
  if (idToken === null || idToken === undefined) {
    throw new Error('Missing ID Token');
  }

  const response = await axios.get(`${placesNearbyUrl}?location=${location}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  return response.data;
};

// function to format and enrich the restaurant data.
export const restaurantsTransform = ({ results = [] }: { results: any[] }) => {
  const mappedResults = results.map((restaurant: any) => {
    return {
      ...restaurant,
      placeId: restaurant.id,
      name: restaurant.displayName.text,
      icon: `${restaurant.iconMaskBaseUri}.png`,
      photos: restaurant.photos,
      address: restaurant.shortFormattedAddress,
      isOpenNow: restaurant.currentOpeningHours && restaurant.currentOpeningHours.openNow,
      isClosedTemporarily: restaurant.businessStatus === 'CLOSED_TEMPORARILY',
      rating: restaurant.rating || 0,
    };
  });

  // use the camelize library to convert all property names to camelCase format.
  return camelize(mappedResults) as Restaurant[];
};
