import { Image, Text } from 'react-native';

import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

// render SVG content directly from an XML string or file.
import { SvgXml } from 'react-native-svg';

import { Spacer } from '../../../spacer/spacer.component';

import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

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

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
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
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://lh3.googleusercontent.com/p/AF1QipNOm7YNlbBBuLr1TzTci8uys8nvIQfGxo8QkW41=w408-h240-k-no-pi-0-ya181.05489-ro-0-fo100',
    ],
    address = 'Rosenheimer Str. 12, 81669 München',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard mode='elevated' elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => {
              return <SvgXml key={i} width='20' height='20' xml={star} />;
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text style={{ color: 'red' }}>CLOSED TEMPORARILY</Text>}
            <Spacer variant='left.large' />
            {isOpenNow && <SvgXml width='20' height='20' xml={open} />}
            <Spacer variant='left.large' />
            <Image style={{ width: 16, height: 16 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
