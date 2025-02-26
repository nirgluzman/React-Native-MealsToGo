# React Native - Meals To Go

## GitHub repository

- https://github.com/nirgluzman/React-Native-MealsToGo.git
- https://github.com/mobinni/MealsToGo.git

## Architecture

![](./docs/images/architecture.png)

## React Native Cheat Sheet

https://zerotomastery.io/cheatsheets/react-native-cheat-sheet/

## Expo

https://docs.expo.dev/

- Expo is a framework that makes developing Android and iOS apps easier.

- Create a new project using the blank template with TypeScript enabled,
  https://docs.expo.dev/more/create-expo/#--template

```bash
yarn create expo-app --template blank-typescript

```

## Set up ESLint in VS Code for React Native applications that use TypeScript

- https://typescript-eslint.io/
- https://docs.expo.dev/guides/using-eslint/

- ESLint statically analyzes your code to quickly find problems.

## React Native Paper

https://callstack.github.io/react-native-paper/

- A collection of customizable and production-ready components for React Native, following Google’s
  Material Design guidelines.
- Convert CSS to React Native stylesheet object,
  https://github.com/styled-components/css-to-react-native

## Styled Components (React and React Native)

https://styled-components.com/

- `Styled-Components` is a library for React that allows you to write your CSS directly in your
  javascript.
- `yarn` is required for installation, as it seems that `npm` does not work correctly for this
  package.

```bash
yarn add styled-components
yarn add -D @types/styled-components-react-native
```

## Safe Area Context

https://docs.expo.dev/versions/latest/sdk/safe-area-context/
https://docs.expo.dev/develop/user-interface/safe-areas/

- Creating a safe area ensures your app screen's content is positioned correctly. This means it
  doesn't get overlapped by notches, status bars, home indicators, and other interface elements that
  are part of the device's physical hardware or are controlled by the operating system.
- `react-native-safe-area-context` provides a flexible API for accessing device safe area inset
  information. This allows you to position your content appropriately around notches, status bars,
  home indicators, and other such device and operating system interface elements.
- It also provides a `SafeAreaView` to render content within the safe area boundaries of a device.
- It's generally recommended to include `StatusBar` within `SafeAreaView` that is nested within a
  `SafeAreaProvider`.

## React Native StatusBar

https://reactnative.dev/docs/statusbar

- Component to control the app's status bar.
- E.g. `currentHeight` returns the height of the status bar (only in Android; returns `null` in
  iOS).

## Layout with Flexbox

https://reactnative.dev/docs/flexbox#flex

## Rendering lists - FlatList & ScrollView

https://reactnative.dev/docs/flatlist <br /> https://reactnative.dev/docs/scrollview

- `FlatList` is a component optimized for handling large lists of data; it efficiently renders only
  the visible items on the screen, conserving memory and improving performance.
- The `FlatList` component also provides scrolling, pull-to-refresh, and item selection features.
- A `ScrollView` is a scrolling container, but it's not ideal as a container for mapping over a
  large collection of list items. This is because it will render the entire list of elements whether
  they're on-screen or not. A `FlatList` component only renders items on screen, which helps improve
  app performance for long lists.

## React Navigation

https://reactnavigation.org/

- Library to implement navigation functionality in a React application.

- A `Navigator` is a React component that decides how to render the screens we have defined. It
  contains `Screen` elements as its children to define the configuration for screens.

## Typechecking the Navigator

https://reactnavigation.org/docs/typescript/

- React Navigation can be configured to type-check screens and their params, as well as various
  other APIs using TypeScript.
