//
// Middleware function to handle errors that occur during the request processing pipeline.
// https://medium.com/@xiaominghu19922/proper-error-handling-in-express-server-with-typescript-8cd4ffb67188
//

import type { Request, Response, NextFunction } from 'express';
import ApplicationError from '../errors/ApplicationError';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // check if the error is an instance of ApplicationError (custom error).
  if (err instanceof ApplicationError) {
    const { statusCode, message } = err;
    console.error(`Application Error: ${message}`);

    // send a JSON response with the error message and the corresponding status code.
    return res.status(statusCode).json({ error: message });
  }

  // Handle other types of errors.
  console.error(`Unhandled Error: ${err.message}`);
  return res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;
