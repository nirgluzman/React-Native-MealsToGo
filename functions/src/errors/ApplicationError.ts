//
// Custom error class that extends the built-in Error class and adds a statusCode property.
// https://medium.com/@xiaominghu19922/proper-error-handling-in-express-server-with-typescript-8cd4ffb67188
//

export default class ApplicationError extends Error {
  readonly statusCode: number; // HTTP status code.

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ApplicationError';
    Error.captureStackTrace(this, this.constructor);
  }
}
