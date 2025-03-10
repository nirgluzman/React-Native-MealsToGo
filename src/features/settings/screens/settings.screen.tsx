import { useContext } from 'react';

import styled from 'styled-components/native';
import { Avatar, List } from 'react-native-paper';

import { theme, type Theme } from '../../../infrastructure/theme';

import { SettingsStackScreenProps } from '../../../types/navigation';

import { AuthContext } from '../../../services/auth/auth.context';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${({ theme }: { theme: Theme }) => theme.space[4]};
`;

export const SettingsScreen = ({ navigation }: SettingsStackScreenProps<'Profile'>) => {
  const { user, onLogout } = useContext(AuthContext);

  return (
    <>
      <AvatarContainer>
        <Avatar.Icon
          size={180}
          icon='human'
          style={{ backgroundColor: theme.colors.brand.primary }}
        />
        <Spacer position='top' size='large'>
          <Text variant='label'>{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props: { color: string }) => <List.Icon {...props} color='white' icon='heart' />}
          onPress={() => navigation.navigate('Favourites')}
          titleStyle={{ color: theme.colors.text.inverse }}
          descriptionStyle={{ color: theme.colors.text.inverse }}
        />
        <SettingsItem
          title='Logout'
          left={(props: { color: string }) => <List.Icon {...props} color='white' icon='logout' />}
          onPress={onLogout}
          titleStyle={{ color: theme.colors.text.inverse }}
        />
      </List.Section>
    </>
  );
};
