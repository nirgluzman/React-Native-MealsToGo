//
// Firebase Functions entry point.
//

import { onRequest, type HttpsFunction } from 'firebase-functions/v2/https'; // Handle HTTP requests.

// firebase-functions currently takes a dependency on @types/express version 4.17.21.
// https://stackoverflow.com/questions/79514147/what-is-the-response-type-of-onrequest-from-firebase-functions-v2-https
import express from 'express';

// enable automatic error handling for async Express routes.
// https://medium.com/@utkuu/error-handling-in-express-js-and-express-async-errors-package-639c91ba3aa2
import 'express-async-errors';

import geocodeRouter from './routes/geocode.routes';
import placesRouter from './routes/places.routes';
import errorHandler from './middlewares/errors.middleware';

// Cloud Function to handle Geocoding requests.
const geocodeApp = express();
geocodeApp.use('/', geocodeRouter);
export const geocode: HttpsFunction = onRequest(geocodeApp);

// Cloud Function to handle requests for Places Nearby.
const placesApp = express();
placesApp.use('/', placesRouter);
export const placesNearby: HttpsFunction = onRequest(placesApp);

// Error handling
geocodeApp.use(errorHandler);
placesApp.use(errorHandler);
