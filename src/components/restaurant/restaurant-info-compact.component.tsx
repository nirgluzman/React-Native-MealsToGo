//
// Compact preview of a restaurant info.
//

import { Platform } from 'react-native';
import WebView from 'react-native-webview';
import styled from 'styled-components/native';

import type { Restaurant } from '../../types/restaurant';
import { Text } from '../typography/text.component';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

// checking which operating system the app is running on.
const isAndroid = Platform.OS === 'android';

export const RestaurantInfoCompact = ({
  restaurant,
  isMap, // Image should be displayed in WebView only within the MapView.
}: {
  restaurant: Restaurant;
  isMap: boolean;
}) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant='caption' numberOfLines={3} style={[{ color: !isMap && 'white' }]}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
