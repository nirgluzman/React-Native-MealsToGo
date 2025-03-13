import { onRequest } from 'firebase-functions/v2/https'; // Handle HTTP requests.
import type { HttpsFunction } from 'firebase-functions/https';

import { geocodeRequest } from './geocode';

export const geocode: HttpsFunction = onRequest((request, response) => {
  geocodeRequest(request as any, response as any);
});
