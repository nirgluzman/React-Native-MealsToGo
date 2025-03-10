import { useContext } from 'react';

import {
  NavigationContainer,
  DarkTheme, // Built-in themes, https://reactnavigation.org/docs/themes/
} from '@react-navigation/native';

import { AuthContext } from '../../services/auth/auth.context';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer
      theme={{
        ...DarkTheme,
        colors: { ...DarkTheme.colors, border: 'white' },
      }}>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
