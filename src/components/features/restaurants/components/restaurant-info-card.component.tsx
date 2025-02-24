import {
  SvgXml, // render SVG content directly from an XML string or file.
} from 'react-native-svg';

import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Section,
  Rating,
  Icon,
  SectionEnd,
} from './restaurant-info-card.styles';

import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

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
