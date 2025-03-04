import { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../../services/auth/auth.context';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
