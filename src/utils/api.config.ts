//
// API endpoints for development (local execution) and production (deployed on cloud).
//

// Determines if the application is running in development mode (localhost).
export const isDevelopment = process.env.EXPO_PUBLIC_APP_ENV === 'development';

// Base URL for accessing Firebase Cloud Functions on local machine (localhost).
// The IP address '10.0.2.2' is an alias for the host machine's localhost when running an Android emulator.
// This allows the emulator to communicate with locally running Cloud Functions.
const local = 'http://10.0.2.2:5001/mealstogo-2025/us-central1';

// Base URL for production (deployed version running on GCP).
const prod = 'https://us-central1-mealstogo-2025.cloudfunctions.net';

// geocode url
export const geocodeUrl = isDevelopment
  ? // Endpoint for execution within local machine.
    `${local}/geocode`
  : // Endpoint for production (deployed version on cloud).
    `${prod}/geocode`;

// placesNearby url
export const placesNearbyUrl = isDevelopment
  ? // Endpoint for execution within local machine.
    `${local}/placesNearby`
  : // Endpoint for production (deployed version on cloud).
    `${prod}/placesNearby`;
