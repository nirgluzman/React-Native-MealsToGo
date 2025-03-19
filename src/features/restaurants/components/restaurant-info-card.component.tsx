import {
  SvgXml, // render SVG content directly from an XML string or file.
} from 'react-native-svg';

import type { Restaurant } from '../../../types/restaurant';

import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Favourite } from '../../../components/favourites/favourite.component';

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

import star from '../../../../assets/star';
import open from '../../../../assets/open';

export const RestaurantInfoCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily, placeId } =
    restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  // determine the image source: photo URL from API (if exists) or local placeholder image as a fallback.
  const imageSource = photos[0]
    ? { uri: photos[0] }
    : require('../../../../assets/restaurant-placeholder.jpg');

  return (
    <RestaurantCard mode='elevated' elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={placeId} source={imageSource} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => {
              // resolve React key warning by adding placeId to rating star map keys.
              return <SvgXml key={`star-${placeId}-${i}`} width='20' height='20' xml={star} />;
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
