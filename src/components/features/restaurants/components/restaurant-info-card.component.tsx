import styled from 'styled-components/native';
import { Theme } from '../../../../infrastructure/theme';

import { Card } from 'react-native-paper';

// render SVG content directly from an XML string or file.
import { SvgXml } from 'react-native-svg';

import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';

import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.bg.primary};
  padding: ${(props: any) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.body};
  font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.caption};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }: { theme: Theme }) => theme.space[2]};
  padding-bottom: ${({ theme }: { theme: Theme }) => theme.space[2]};
`;

const Icon = styled.Image`
  width: 16px;
  height: 16px;
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
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => {
              return <SvgXml key={i} width='20' height='20' xml={star} />;
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant='error'>CLOSED TEMPORARILY</Text>}
            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml width='20' height='20' xml={open} />}
            </Spacer>
            <Spacer position='left' size='large'>
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
