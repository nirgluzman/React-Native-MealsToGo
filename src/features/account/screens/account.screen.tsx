import LottieView from 'lottie-react-native';

import type { AccountStackScreenProps } from '../../../types/navigation';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';

import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({ navigation }: AccountStackScreenProps<'Main'>) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key='animation'
          source={require('../../../../assets/watermelon.json')}
          style={{ width: '100%', height: '100%' }}
          autoPlay
          loop
          resizeMode='cover'
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>
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
