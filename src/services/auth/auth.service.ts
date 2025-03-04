//
// Authentication service:
// This file encapsulates Firebase authentication methods for user management.
//

import { auth } from '../../config/firebase/firebaseConfig';

import {
  onAuthStateChanged, // monitors authentication status changes and returns the current user.
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User as FirebaseUser,
} from 'firebase/auth';

// sets up a listener for authentication state changes.
export const listenAuthState = (callback: (user: FirebaseUser | null) => void) => {
  // onAuthStateChanged sets up a listener that monitors the user's authentication state.
  // whenever the state changes (e.g., user signs in, signs out, or the authentication token refreshes), it executes
  // the provided callback function, passing the current user object (or null) as an argument.
  return onAuthStateChanged(auth, callback);
};

// create a new user account with email and password.
export const registerRequest = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// login user with email and password.
export const loginRequest = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// handle user logout.
export const logoutRequest = () => {
  return signOut(auth);
};
