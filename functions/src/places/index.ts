import type { Request, Response } from 'express';
import * as url from 'url'; // utilities for URL resolution and parsing.

import { mocks, mockImages, type MockKeys } from './mock'; // mock data

export const placesRequest = (request: Request, response: Response) => {
  // extract query parameters from a URL.
  const { location } = url.parse(request.url, true).query;

  // fetch restaurants data based on the provided location.
  const restaurantsData = mocks[location as MockKeys];

  if (!restaurantsData) {
    // if no restaurants data is found, send a 404 response.
    response.status(404).send('No restaurants found for the given location');
    return;
  }

  // add mock Image data to each restaurant (using direct mutation).
  restaurantsData.results.forEach(
    (restaurant: any) =>
      (restaurant.photos = [mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]])
  );

  // send the mock restaurants data as a JSON response.
  response.json(restaurantsData);
};
