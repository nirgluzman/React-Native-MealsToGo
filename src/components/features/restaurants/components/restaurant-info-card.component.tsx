import styled from 'styled-components/native';

import {
  Card, // sheet of material that serves as an entry point to more detailed information.
} from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  padding: ${(props: any) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.heading};
  font-size: ${(props: any) => props.theme.fontSizes.body};
  color: ${(props: any) => props.theme.colors.text.primary};
`;

const Address = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.caption};
  color: ${(props: any) => props.theme.colors.text.primary};
`;

interface Restaurant {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

interface RestaurantProps {
  restaurant: Restaurant;
}

export const RestaurantInfoCard = ({ restaurant }: RestaurantProps) => {
  const {
    name = 'Pizzesco',
    icon = '',
    photos = [
      'https://lh3.googleusercontent.com/p/AF1QipNOm7YNlbBBuLr1TzTci8uys8nvIQfGxo8QkW41=w408-h240-k-no-pi-0-ya181.05489-ro-0-fo100',
    ],
    address = 'Rosenheimer Str. 12, 81669 München',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard mode='elevated' elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
