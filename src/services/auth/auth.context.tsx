//
// Authentication context for managing authentication state and logic for the application.
//

import { useState, useEffect, createContext, type ReactNode } from 'react';

import { type User as FirebaseUser } from 'firebase/auth';

import { listenAuthState, loginRequest } from './auth.service';

// define the context value type.
type AuthContextType = {
  user: FirebaseUser | null;
  isAuthenticated: boolean;
  onLogin: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
};

// create context with proper typing and default value.
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  onLogin: async () => {},
  isLoading: false,
  error: null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const onLogin = async (email: string, password: string) => {
    setIsLoading(true); // display a loading indicator to the user while the data is being fetched.
    setError(null);
    try {
      const { user: currentUser } = await loginRequest(email, password);
      setUser(currentUser);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // subscribe to the users current authentication state, and receive an event whenever that state changes.
    const unsubscribe = listenAuthState((currentUser) => {
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
        isLoading,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
