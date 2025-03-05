import type { AccountStackScreenProps } from '../../../types/navigation';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';

import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({ navigation }: AccountStackScreenProps<'Main'>) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton icon='login' onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <Spacer size='large' />
        <AuthButton icon='account-plus' onPress={() => navigation.navigate('Register')}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
