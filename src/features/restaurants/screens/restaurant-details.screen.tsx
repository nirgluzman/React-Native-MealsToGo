import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

// typecheck for screens - annotate the route props received by a screen.
import type { RestaurantDetailsScreenProps } from '../../../types/navigation';

export const RestaurantDetailsScreen = ({ route }: RestaurantDetailsScreenProps) => {
  const { restaurant } = route.params;
  return <RestaurantInfoCard restaurant={restaurant} />;
};
