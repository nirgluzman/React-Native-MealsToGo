// Rendering a custom Marker with a MapView Callout, https://github.com/react-native-maps/react-native-maps

import type { Restaurant } from '../../../types/restaurant';
import { RestaurantInfoCompact } from '../../restaurants/components/restaurant-info-compact.component';

export const MapCallout = ({ restaurant }: { restaurant: Restaurant }) => {
  return <RestaurantInfoCompact restaurant={restaurant} />;
};
