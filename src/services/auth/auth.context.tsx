//
// Authentication context for managing authentication state and logic for the application.
//

import { useState, useEffect, createContext, type ReactNode } from 'react';

import { type User as FirebaseUser } from 'firebase/auth';
import { FirebaseError } from '@firebase/util'; // subclass of the standard JavaScript Error object. In addition to a message string and stack trace, it contains a string code.

import { listenAuthState, loginRequest, registerRequest, logoutRequest } from './auth.service';

// define the context value type.
type AuthContextType = {
  user: FirebaseUser | null;
  isAuthenticated: boolean;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (email: string, password: string, repeatedPassword: string) => Promise<void>;
  onLogout: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
};

// create context with proper typing and default value.
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  onLogin: async () => {},
  onRegister: async () => {},
  onLogout: async () => {},
  isLoading: false,
  error: null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { user: currentUser } = await loginRequest(email, password);
      setUser(currentUser);
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (email: string, password: string, repeatedPassword: string) => {
    if (password !== repeatedPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const { user: currentUser } = await registerRequest(email, password);
      setUser(currentUser);
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await logoutRequest();
      setUser(null);
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // subscribe to the users current authentication state, and receive an event whenever that state changes.
    const unsubscribe = listenAuthState((currentUser) => {
      setUser(currentUser); // update user state with the currentUser object received from the authentication listener (onAuthStateChanged).
      setIsAuthenticated(!!currentUser);
    });

    return () => {
      unsubscribe(); // unsubscribe when the component is unmounted (cleanup mechanism).
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        onLogin,
        onRegister,
        onLogout,
        isLoading,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
