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
  placeId: string;

  // index signature - allow the Restaurant object to have any number of additional properties
  // with string keys and values of any type.
  [key: string]: any;
};
