import { useState, useCallback, useContext } from 'react';

// analogous to React's useEffect hook. the only difference is that it only runs if the screen is currently focused.
import { useFocusEffect } from '@react-navigation/native';

import styled from 'styled-components/native';
import { Avatar, List } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { theme, type Theme } from '../../../infrastructure/theme';

import { SettingsStackScreenProps } from '../../../types/navigation';

import { AuthContext } from '../../../services/auth/auth.context';

import { Pressable } from '../../../components/button/pressable.component';
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
  const [photo, setPhoto] = useState<string | null>(null); // user profile image

  useFocusEffect(
    // run side effects only when a screen comes into focus.
    useCallback(() => {
      const getProfilePhoto = async () => {
        // get the profile photo from AsyncStorage and update the user's photo.
        const photoUri = await AsyncStorage.getItem(`${user!.uid}-photo`);
        if (photoUri) {
          setPhoto(photoUri);
        }
      };

      getProfilePhoto();
    }, [user])
  );

  return (
    <>
      <AvatarContainer>
        <Pressable onPress={() => navigation.navigate('Camera')}>
          {!photo ? (
            <Avatar.Icon
              size={180}
              icon='human'
              style={{ backgroundColor: theme.colors.brand.primary }}
            />
          ) : (
            <Avatar.Image size={180} source={{ uri: photo }} />
          )}
        </Pressable>
        <Spacer position='top' size='large'>
          <Text variant='label'>{user?.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <Pressable
          onPress={() => navigation.navigate('Favourites')}
          android_ripple={{ color: theme.colors.ui.quaternary }}>
          <SettingsItem
            title='Favourites'
            description='View your favourites'
            left={(props: { color: string }) => <List.Icon {...props} color='white' icon='heart' />}
            titleStyle={{ color: theme.colors.text.inverse }}
            descriptionStyle={{ color: theme.colors.text.inverse }}
          />
        </Pressable>

        <Pressable onPress={onLogout} android_ripple={{ color: theme.colors.ui.quaternary }}>
          <SettingsItem
            title='Logout'
            left={(props: { color: string }) => (
              <List.Icon {...props} color='white' icon='logout' />
            )}
            titleStyle={{ color: theme.colors.text.inverse }}
          />
        </Pressable>
      </List.Section>
    </>
  );
};
