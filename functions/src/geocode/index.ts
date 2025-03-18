//
// Function to handle HTTP requests to geocode a given city name using the Google Maps Geocoding API.
//

import 'firebase-functions/logger/compat'; // enable console.log with Firebase Functions, https://firebase.google.com/docs/functions/writing-and-viewing-logs?gen=2nd

import type { Request } from 'firebase-functions/v2/https';
import type { Response } from 'express'; // https://stackoverflow.com/questions/79514147/what-is-the-response-type-of-onrequest-from-firebase-functions-v2-https

import * as url from 'url'; // utilities for URL resolution and parsing.

// Import the Google Maps Services client for making API requests, https://github.com/googlemaps/google-maps-services-js
import { Client } from '@googlemaps/google-maps-services-js';

// Instantiate the client.
const client = new Client({});

export const geocodeRequest = async (request: Request, response: Response) => {
  try {
    // extract query parameters from a URL with a default value to handle undefined cases.
    const { city = '' } = url.parse(request.url, true).query;

    if (!city) {
      return response.status(400).json({ error: 'No city provided' });
    }

    // geocoding request to convert city name to coordinates.
    // https://googlemaps.github.io/google-maps-services-js/interfaces/GeocodeRequest.html
    const geocodingResponse = await client.geocode({
      params: {
        address: city.toString(), // ensure city is a string.
        key: process.env.GOOGLE_MAPS_API_KEY!, // Google Maps Platform APIs require API keys; GCP Service Accounts are not supported.
      },
      timeout: 1000,
    });

    // if the location data is not found, send a 404 status code and a message.
    if (
      !geocodingResponse ||
      !geocodingResponse.data ||
      geocodingResponse.data.status === 'ZERO_RESULTS'
    ) {
      return response.status(404).json({ error: 'No location data available for city' });
    }

    // send geocoding results as a JSON response.
    return response.json(geocodingResponse.data);
  } catch (error) {
    console.error('Geocoding error:', error);
    return response.status(500).json({
      error: 'An error occurred while processing the Geocoding request',
    });
  }
};
