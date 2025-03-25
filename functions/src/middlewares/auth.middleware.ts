//
// Middleware to check for a valid Firebase Authentication ID token in the 'Authorization' header of the request.
// If a valid token is present, it allows the request to proceed to the next middleware or route handler.
// If the token is missing or invalid, it returns a 401 (Unauthorized) or 403 (Forbidden) error response.
//

import * as admin from 'firebase-admin';
import 'firebase-functions/logger/compat'; // enable console.log with Firebase Functions, https://firebase.google.com/docs/functions/writing-and-viewing-logs?gen=2nd

import type { Request, Response, NextFunction } from 'express';

import ApplicationError from '../errors/ApplicationError';

// Initialize the Firebase Admin SDK.
admin.initializeApp();

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  // extract Authorization header.
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    throw new ApplicationError(401, 'Missing or invalid Authorization header');
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    await admin.auth().verifyIdToken(idToken);
    next(); // proceed to the next middleware or route handler.
    return;
  } catch (error) {
    console.error('Error verifying ID token:', error);
    throw new ApplicationError(403, 'Authentication failed');
  }
};
