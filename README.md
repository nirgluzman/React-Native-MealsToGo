# React Native - Meals To Go

## GitHub repository

- https://github.com/nirgluzman/React-Native-MealsToGo.git
- https://github.com/mobinni/MealsToGo.git

## React Native Cheat Sheet

https://zerotomastery.io/cheatsheets/react-native-cheat-sheet/

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

- Styled-Components is a library for React that allows you to write your CSS directly in your
  javascript.

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
