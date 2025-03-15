import { onRequest } from 'firebase-functions/v2/https'; // Handle HTTP requests.
import type { HttpsFunction } from 'firebase-functions/https';

import { geocodeRequest } from './geocode';
import { placesRequest } from './places';

// API endpoint to handle geocoding requests.
export const geocode: HttpsFunction = onRequest((request, response) =>
  geocodeRequest(request as any, response as any)
);

// API endpoint to handle requests for nearby places.
export const placesNearby: HttpsFunction = onRequest((request, response) =>
  placesRequest(request as any, response as any)
);
