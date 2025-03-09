import { useContext } from 'react';

import { List } from 'react-native-paper';

import { AuthContext } from '../../../services/auth/auth.context';

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthContext);

  return (
    <List.Section>
      <List.Item
        title='Logout'
        left={(props) => <List.Icon {...props} icon='logout' color='black' />}
        onPress={onLogout}
      />
    </List.Section>
  );
};
