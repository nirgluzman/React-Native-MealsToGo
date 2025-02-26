// TypeScript type definitions for restaurant-related objects.

// defines the structure of a restaurant object.
export type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
