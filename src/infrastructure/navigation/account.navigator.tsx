import {
  createStackNavigator, // function to set up the foundation for stack-based navigation.
  TransitionPresets, // pre-defined configurations for screen transition animations within the Stack Navigator.
} from '@react-navigation/stack';

import { Icon } from 'react-native-paper'; // see: https://callstack.github.io/react-native-paper/docs/guides/icons/#1-an-icon-name

import type { AccountStackParamList } from '../../types/navigation';

import { AccountScreen } from '../../features/account/screens/account.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

import { colors } from '../../infrastructure/theme/colors';

const AccountStack = createStackNavigator<AccountStackParamList>();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: true, // change to true to show the header.
        headerBackButtonDisplayMode: 'minimal',
        headerTitle: '', // remove the header title.
        headerTransparent: true, // makes the header background transparent.
        headerTintColor: colors.brand.primary, // color of the back button.
        headerBackImage: ({ tintColor }) => <Icon source='reply' color={tintColor} size={60} />,
        animation: 'none', // transition animation is disabled.
        gestureEnabled: true, // enable gestures to dismiss screen.
        ...TransitionPresets.SlideFromRightIOS, // mimic the modal presentation style seen on iOS.
        gestureDirection: 'horizontal', // only allow horizontal gestures for navigation.
      }}>
      <AccountStack.Screen name='Main' component={AccountScreen} />
      <AccountStack.Screen name='Login' component={LoginScreen} />
      <AccountStack.Screen name='Register' component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
