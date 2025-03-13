import type { Request, Response } from 'express';
import * as url from 'url'; // utilities for URL resolution and parsing.

import { locations, type LocationMockKeys } from './mock/locations'; // mock data

export const geocodeRequest = (request: Request, response: Response) => {
  // extract query parameters from a URL.
  const { city } = url.parse(request.url, true).query;

  // fetch mock location data from a predefined set of locations.
  const locationMock = locations[city as LocationMockKeys];

  // if the location data is not found, send a 404 status code and a message.
  if (!locationMock) {
    response.status(404).send('No location data available for city');
    return;
  }

  // send the mock location data as a JSON response.
  response.json(locationMock);
};
