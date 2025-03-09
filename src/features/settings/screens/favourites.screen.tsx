import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import type { SettingsStackScreenProps } from '../../../types/navigation';
import type { Restaurant } from '../../../types/restaurant';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const NoFavouritesArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }: SettingsStackScreenProps<'Favourites'>) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantList
      data={favourites}
      keyExtractor={(item: Restaurant) => item.name}
      renderItem={({ item }: { item: Restaurant }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RestaurantDetails', {
              restaurant: item,
            });
          }}>
          <Spacer position='bottom' size='large'>
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  ) : (
    <NoFavouritesArea>
      <Text variant='body'>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
