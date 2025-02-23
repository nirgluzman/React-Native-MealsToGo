import styled from 'styled-components/native';

import { Card } from 'react-native-paper';

// render SVG content directly from an XML string or file.
import { SvgXml } from 'react-native-svg';

import star from '../../../../../assets/star';

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

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard mode='elevated' elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => {
            return <SvgXml width='20' height='20' xml={star} />;
          })}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
