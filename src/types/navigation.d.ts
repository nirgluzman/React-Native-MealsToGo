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
// Account Stack Navigator: manages user authentication and access to the application.
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
export type AccountStackParamList = {
  Main: undefined; // specifying 'undefined' means that the route doesn't have params.
  Login: undefined;
  Register: undefined;
};

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

export type SettingsStackParamList = {
  Profile: undefined; // specifying 'undefined' means that the route doesn't have params.
  Favourites: undefined; // specifying 'undefined' means that the route doesn't have params.
  RestaurantDetails: { restaurant: Restaurant };
  Camera: undefined;
};

// Account Stack Navigator props
export type AccountStackScreenProps<RouteName extends keyof AccountStackParamList> =
  StackScreenProps<
    AccountStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

export type AccountStackRouteProps<RouteName extends keyof AccountStackParamList> = RouteProp<
  AccountStackParamList,
  RouteName // name of the route the screen belongs to.
>;

export type AccountStackNavigationProps<RouteName extends keyof AccountStackParamList> =
  StackNavigationProp<
    AccountStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

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

// Settings Stack Navigator props
export type SettingsStackScreenProps<RouteName extends keyof SettingsStackParamList> =
  StackScreenProps<
    SettingsStackParamList,
    RouteName // name of the route the screen belongs to.
  >;

// Combined screen props for RestaurantDetails accessible from multiple navigators.
// This type definition ensures that the RestaurantDetails screen can handle navigation properties properly, regardless of which path the user took to get there.
export type RestaurantDetailsScreenProps = CompositeScreenProps<
  RestaurantsStackScreenProps<'RestaurantDetails'>, // Props when coming from the Restaurants stack.
  MapStackScreenProps<'RestaurantDetails'>, // Props when coming from the Map stack.
  SettingsStackScreenProps<'RestaurantDetails'> // Props when coming from the Settings stack.
>;
