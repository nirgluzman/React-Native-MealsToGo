import {
  createStackNavigator, // function to set up the foundation for stack-based navigation.
} from '@react-navigation/stack';

import type { AccountStackParamList } from '../../types/navigation';

import { AccountScreen } from '../../features/account/screens/account.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

const AccountStack = createStackNavigator<AccountStackParamList>();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Screen name='Main' component={AccountScreen} />
      <AccountStack.Screen name='Login' component={LoginScreen} />
      <AccountStack.Screen name='Register' component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
