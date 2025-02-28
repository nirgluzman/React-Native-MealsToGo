//
// TypeScript type definitions for React Navigation objects, https://reactnavigation.org/docs/typescript/
//

import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import type { Restaurant } from './restaurant';

//
// Bottom Tab Navigator (Root) - primary navigation structure of the app.
// Allows users to switch between exploring restaurants, viewing the map, and accessing app settings.
//

// mappings for route names to the params of the route.
export type RootTabParamList = {
  Restaurants: NavigatorScreenParams<StackParamList>; // tab contains a nested navigator.
  Map: undefined; // specifying 'undefined' means that the route doesn't have params.
  Settings: undefined;
};

// typecheck for screens - annotate the navigation and the route props received by a screen.
export type AnyTabScreenProps = BottomTabScreenProps<RootTabParamList, keyof RootTabParamList>;

export type TabScreenProps<RouteName extends keyof RootTabParamList> = BottomTabScreenProps<
  RootTabParamList,
  RouteName //  specific to individual routes/screens, so it requires the RouteName generic.
>;

export type TabRouteProps<RouteName extends keyof RootTabParamList> = RouteProp<
  RootTabParamList,
  RouteName //  specific to individual routes/screens, so it requires the RouteName generic.
>;

export type TabNavigationProps<RouteName extends keyof RootTabParamList> = BottomTabNavigationProp<
  RootTabParamList,
  RouteName //  specific to individual routes/screens, so it requires the RouteName generic.
>;

//
// Stack Navigator
// Handles the navigation within the restaurants section, allowing users to transition from a list
// of restaurants to detailed information about a selected restaurant.
//

// mappings for route names to the params of the route.
export type StackParamList = {
  RestaurantsList: undefined; // specifying 'undefined' means that the route doesn't have params.
  RestaurantDetails: { restaurant: Restaurant };
};

// typecheck for screens - annotate the navigation and the route props received by a screen.
export type RestaurantsScreenProps = StackScreenProps<StackParamList, 'RestaurantsList'>;
export type RestaurantDetailsScreenProps = StackScreenProps<StackParamList, 'RestaurantDetails'>;

export type StackRouteProps<RouteName extends keyof StackParamList> = RouteProp<
  StackParamList,
  RouteName // specific to individual routes/screens, so it requires the RouteName generic.
>;

export type StackNavigationProps<RouteName extends keyof StackParamList> = StackNavigationProp<
  StackParamList,
  RouteName // specific to individual routes/screens, so it requires the RouteName generic.
>;
