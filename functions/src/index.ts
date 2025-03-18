import { onRequest, type HttpsFunction, type Request } from 'firebase-functions/v2/https'; // Handle HTTP requests.
import type { Response } from 'express';

import { geocodeRequest } from './geocode';
import { placesRequest } from './places';

// API endpoint to handle geocoding requests.
export const geocode: HttpsFunction = onRequest(async (request: Request, response: Response) => {
  await geocodeRequest(request, response);
});

// API endpoint to handle requests for nearby places.
export const placesNearby: HttpsFunction = onRequest(
  async (request: Request, response: Response) => {
    await placesRequest(request, response);
  }
);
