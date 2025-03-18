//
// Function to Handle requests to the Google Places Nearby Search API to fetch restaurant data.
//
// https://developers.google.com/maps/documentation/places/web-service/nearby-search
// https://cloud.google.com/nodejs/docs/reference/places/1.7.0/places/protos.google.maps.places.v1.isearchnearbyrequest
// https://github.com/googleapis/google-cloud-node/blob/main/packages/google-maps-places/samples/generated/v1/places.search_nearby.js
// https://stackoverflow.com/questions/79514940/how-to-include-fieldmask-in-nearby-search-new
//

import 'firebase-functions/logger/compat'; // enable console.log with Firebase Functions, https://firebase.google.com/docs/functions/writing-and-viewing-logs?gen=2nd

import type { Request } from 'firebase-functions/v2/https';
import type { Response } from 'express'; // https://stackoverflow.com/questions/79514147/what-is-the-response-type-of-onrequest-from-firebase-functions-v2-https

import axios from 'axios';
import * as url from 'url'; // utilities for URL resolution and parsing.

export const placesRequest = async (request: Request, response: Response) => {
  try {
    // extract query parameters from a URL with a default value to handle undefined cases.
    const { location = '' } = url.parse(request.url, true).query;

    if (!location) {
      // if no location is provided, send a 400 response.
      return response.status(400).json({ error: 'No location provided' });
    }

    // extract latitude and longitude from location string.
    const [lat, lng] = location.toString().split(',').map(Number);

    // retrieve nearby restaurants using the Google Places Nearby API.
    const placesNearbyResponse = await axios.post(
      'https://places.googleapis.com/v1/places:searchNearby',
      {
        includedTypes: ['restaurant'],
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng,
            },
            radius: 5000,
          },
        },
        maxResultCount: 20,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY, // Google Maps Platform APIs require API keys; GCP Service Accounts are not supported.
          'X-Goog-FieldMask': '*', // list of fields to return in the response, https://developers.google.com/maps/documentation/places/web-service/nearby-search#fieldmask
        },
        timeout: 5000, // 5 seconds timeout
      }
    );

    // if no data is found, send a 404 response and a message.
    if (
      !placesNearbyResponse ||
      !placesNearbyResponse.data ||
      placesNearbyResponse.data.status === 'ZERO_RESULTS'
    ) {
      return response.status(404).json({ error: 'No restaurants found for the given location' });
    }

    // send the restaurants data as a JSON response.
    return response.json({
      results: placesNearbyResponse.data.places,
    });
  } catch (error) {
    // if an error occurs, send a 500 response and a message.
    console.error('PlacesNearby error:', error);
    return response
      .status(500)
      .json({ error: 'An error occurred while processing the PlacesNearby request' });
  }
};
