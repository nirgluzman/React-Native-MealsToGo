//
// TypeScript type definitions for React Navigation objects, https://reactnavigation.org/docs/typescript/
//

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import type { Restaurant } from './restaurant';

//
// Bottom Tab Navigator (Root): primary navigation structure of the app.
// Allows users to switch between exploring restaurants, viewing the map, and accessing app settings.
//
// Restaurants Stack Navigator:
// Handles the navigation within the restaurants section, allowing users to transition from a list of
// restaurants to detailed information about a selected restaurant.
//
// Map Stack Navigator:
// Handles the navigation within the map section, allowing users to transition from map view to detailed restaurant information.
//

// ParamList - mappings for route names to the params of the route (i.e. possible route names and their corresponding params).
export type RootTabParamList = {
  Restaurants: NavigatorScreenParams<RestaurantsStackParamList>; // tab contains a nested navigator.
  Map: NavigatorScreenParams<MapStackParamList>; // tab contains a nested navigator.
  Settings: undefined; // specifying 'undefined' means that the route doesn't have params.
};

export type RestaurantsStackParamList = {
  RestaurantsList: undefined; // specifying 'undefined' means that the route doesn't have params.
  RestaurantDetails: { restaurant: Restaurant };
};

export type MapStackParamList = {
  MapView: undefined; // specifying 'undefined' means that the route doesn't have params.
  RestaurantDetails: { restaurant: Restaurant };
};

// Root Tab Navigator props
export type RootTabScreenProps<RouteName extends keyof RootTabParamList> = BottomTabScreenProps<
  RootTabParamList,
  RouteName // name of the route the screen belongs to.
>;

export type RootTabRouteProps<RouteName extends keyof RootTabParamList> = RouteProp<
  RootTabParamList,
  RouteName // name of the route the screen belongs to.
>;

export type RootTabNavigationProps<RouteName extends keyof RootTabParamList> =
  BottomTabNavigationProp<
    RootTabParamList,
    RouteName // name of the route the screen belongs to.
  >;

// Restaurants Stack Navigator props
export type RestaurantsStackScreenProps<RouteName extends keyof RestaurantsStackParamList> =
  StackScreenProps<
    RestaurantsStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

export type RestaurantsStackRouteProps<RouteName extends keyof RestaurantsStackParamList> =
  RouteProp<
    RestaurantsStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

export type RestaurantsStackNavigationProps<RouteName extends keyof RestaurantsStackParamList> =
  StackNavigationProp<
    RestaurantsStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

// Map Stack Navigator props
export type MapStackScreenProps<RouteName extends keyof MapStackParamList> = StackScreenProps<
  MapStackParamList,
  RouteName // name of the route the screen belongs to.
>;

export type MapStackRouteProps<RouteName extends keyof MapStackParamList> = RouteProp<
  MapStackParamList,
  RouteName // name of the route the screen belongs to.
>;

export type MapStackNavigationProps<RouteName extends keyof MapStackParamList> =
  StackNavigationProp<
    MapStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

// Combined screen props for RestaurantDetails accessible from multiple navigators.
export type RestaurantDetailsScreenProps = CompositeScreenProps<
  RestaurantsStackScreenProps<'RestaurantDetails'>, // props that the RestaurantDetails screen receives when it's navigated to from the RestaurantsStack.
  MapStackScreenProps<'RestaurantDetails'> // props that the RestaurantDetails screen receives when it's navigated to from the MapStack.
>;
