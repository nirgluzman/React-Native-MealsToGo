import { useState, useContext } from 'react';

import { AuthContext } from '../../../services/auth/auth.context';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from '../components/account.styles';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { onLogin, error } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label='Email' // the text or component to use for the floating label.
          value={email} // value of the text input.
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u: string) => setEmail(u)} // callback that is called when the text input's text changes.
        />
        <Spacer size='large' />
        <AuthInput
          label='Password'
          value={password}
          textContentType='password'
          secureTextEntry
          autoCapitalize='none'
          secure
          onChangeText={(p: string) => setPassword(p)}
        />
        {error && (
          <ErrorContainer size='large'>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <AuthButton icon='login' onPress={() => onLogin(email, password)}>
          Login
        </AuthButton>
        <Spacer size='large' />
      </AccountContainer>
    </AccountBackground>
  );
};
