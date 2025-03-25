//
// service layer that sits between the UI components and the data source.
//

import axios from 'axios';
import camelize from 'camelize'; // recursively transform key strings to camel-case.

import { geocodeUrl } from '../../utils/api.config';

// function to fetch location data using a city name as the search term.
export const locationRequest = async (searchTerm: string, idToken: string | null) => {
  // check if the idToken is null or undefined.
  if (idToken === null || idToken === undefined) {
    throw new Error('Missing ID Token');
  }

  const response = await axios.get(`${geocodeUrl}?city=${searchTerm}`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  return response.data;
};

// function to extract latitude and longitude from location results.
export const locationTransform = ({ results }: { results: any[] }) => {
  const { geometry } = camelize(results)[0]; // convert all property names to camelCase format.
  const { lat, lng } = geometry.location;
  const { viewport } = geometry;

  return { center: { lat, lng }, viewport };
};
