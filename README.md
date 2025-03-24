# React Native - Meals To Go

## GitHub repository

https://github.com/nirgluzman/React-Native-MealsToGo.git <br /> https://github.com/mobinni/MealsToGo.git

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

## Expo Go

https://expo.dev/go

- Expo Go is a sandbox environment which enables you to quickly experiment with building native Android and iOS apps.
- Expo Go app comes with pre-installed commonly used libraries so you can quickly prototype and develop your app.
- **Expo Go Limitations** - we can only use libraries bundled in Expo Go !!
- [React Native Directory](https://reactnative.directory/) to check if a library is compatible with Expo Go.

## Accessing Computer's Localhost from Android Emulator

https://developer.android.com/studio/run/emulator

- The Android Emulator simulates Android devices on your computer so that you can test your application on a variety of
  devices and Android API levels without needing to have each physical device.

- Here are two ways to access local computer’s localhost: `IP 10.0.2.2` and `adb reverse`.

- IP address `10.0.2.2` is an alias to the host machine’s loopback interface (localhost).

- `adb reverse` command in Android Debug Bridge (ADB) is used to set up reverse port forwarding between the Android
  device/Emulator and our computer. This command allows us to route requests from a specific port on the Android device
  or Emulator to a port on our computer. It is often used when we want to access services running on our computer, like
  a local web server, from our Android device or Emulator.

## Set up ESLint in VS Code for React Native applications that use TypeScript

https://typescript-eslint.io/ <br /> https://docs.expo.dev/guides/using-eslint/

- ESLint statically analyzes your code to quickly find problems.

## Debugging Runtime issues

https://docs.expo.dev/debugging/runtime-issues/

- We can perform full native debugging with `Android Studio` and `Xcode` by generating source code locally and building
  from that source.

- **Production app is crashing** <br/> For **Android**, we can use `adb logcat` and for **iOS** we can use the Console
  app in Xcode.
- Note that we can view logcat in Android Studio.

## Using Firebase with Expo

https://docs.expo.dev/guides/using-firebase/

- [Firebase](https://firebase.google.com/) is a Backend-as-a-Service (BaaS) app development platform that provides
  hosted backend services such as real-time database, cloud storage, authentication, crash reporting, analytics, and so
  on. It is built on Google's infrastructure and scales automatically.

- There are two different ways we can use Firebase in our projects:

  (\*) Using Firebase JS SDK -> for developing an app with Expo Go! <br /> (\*) Using React Native Firebase

## Cloud Functions for Firebase

https://firebase.google.com/docs/functions

- It's a serverless framework that lets us automatically run backend code in response to events triggered by background
  events, HTTPS requests, the Admin SDK, or Cloud Scheduler jobs.
- [Use TypeScript for Cloud Functions](https://firebase.google.com/docs/functions/typescript).
- Import function triggers directly from their submodules; see this [link](https://firebase.google.com/docs/functions)
  for a complete list of supported triggers.

```js
import { onCall } from 'firebase-functions/v2/https';
import { onRequest } from 'firebase-functions/v2/https';
import { onDocumentWritten } from 'firebase-functions/v2/firestore';
```

## Environment Configuration in Firebase

https://firebase.google.com/docs/functions/config-env?gen=2nd

- The Firebase SDK for Cloud Functions offers built-in environment configuration.
- [Notes on TypeScript types](https://stackoverflow.com/questions/79514147/what-is-the-response-type-of-onrequest-from-firebase-functions-v2-https):
  <br/> `firebase-functions` type definitions uses `@types/express`, and therefore no need to install @types/express
  separately; we should use what Firebase gives us by default.

- **Parameterized configuration** (recommended for most scenarios). This provides strongly-typed environment
  configuration with parameters that are validated at deploy time, which prevents errors and simplifies debugging.
- File-based configuration of **environment variables**. With this approach, we manually create a `.env` file for
  loading environment variables.

- **NOTE:** Environment configuration with `functions.config` is deprecated and is no longer be supported.

- **Google Cloud Secret Manager** - Cloud Functions for Firebase integrates with Secret Manager. This encrypted service
  stores configuration values securely.

## Deploy Android app to Firebase App Distribution w/ GitHub Actions

https://github.com/marketplace/actions/firebase-app-distribution

- This action uploads artifacts (.apk,.aab or .ipa) to Firebase App Distribution.
- YouTube videos: <br />https://github.com/marketplace/actions/firebase-app-distribution <br />
  https://www.youtube.com/watch?v=KYG8lXZCVr4 <br/>

## React Native Paper

https://callstack.github.io/react-native-paper/

- A collection of customizable and production-ready components for React Native, following Google’s Material Design
  guidelines.
- [Configuring icons](https://callstack.github.io/react-native-paper/docs/guides/icons/#configuring-icons) - many
  components such as Button accept an icon prop which is used to display an icon.

## Styled Components (React and React Native)

https://styled-components.com/

- `Styled-Components` is a library for React that allows you to write your CSS directly in your javascript.
- [Convert CSS to React Native stylesheet object](https://github.com/styled-components/css-to-react-native)
- `yarn` is required for installation, as it seems that `npm` does not work correctly for this package.

```bash
yarn add styled-components
yarn add -D @types/styled-components-react-native
```

## Expo Vector Icons

https://docs.expo.dev/guides/icons/

- The `@expo/vector-icons` library is installed by default and it includes popular icon sets from
  https://icons.expo.fyi/

## Lottie (Animation Library)

https://docs.expo.dev/versions/latest/sdk/lottie/

- A library that allows rendering After Effects animations.

## React Native Animations

https://docs.expo.dev/develop/user-interface/animation/ <br/> https://reactnative.dev/docs/animations

## React Native Maps / MapView

https://docs.expo.dev/versions/latest/sdk/map-view/ <br /> https://github.com/react-native-maps/react-native-maps (full
documentation) <br /> https://docs.expo.dev/versions/v52.0.0/sdk/map-view/#deploy-app-with-google-maps <br/>

- A library that provides a Map component that uses Google Maps on Android and Apple Maps or Google Maps on iOS.

- **Note:** Google Maps is no longer supported in Expo Go for Android from SDK 53.

- **Note:** Currently, `react-native-maps` does not support the New Architecture (SDK 52 or newer) !

- **Solution:** Disable the New Architecture (`newArchEnabled: false`) in `app.json` and create a
  [development build](https://docs.expo.dev/develop/development-builds/create-a-build/). As we create our own custom
  build, we must to configure the Google Maps API key within `android.config.googleMaps.apiKey` field.

[Android callouts are cut off](https://github.com/react-native-maps/react-native-maps/issues/5216) <br />
[Android map not working correctly](https://github.com/react-native-maps/react-native-maps/issues/5236)

## Google Maps Platform

https://developers.google.com/maps/ <br /> https://developers.google.com/maps/documentation

- Suite of tools and services that allows developers to embed Google Maps functionality into their own websites and
  applications.

## Client Libraries for Google Maps Web Services

https://developers.google.com/maps/documentation/geocoding/client-library <br />
https://github.com/googlemaps/google-maps-services-js (Node.js)

- Community supported client libraries for Google Maps Services enable us to work with Google Maps web services.
- These libraries are intended for backend/server-side applications.

## Google Maps API

- Display maps using Google's services:

  (\*) [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) - for embedding maps
  in web applications.<br />

  (\*) [Maps SDK for Android](https://developers.google.com/maps/documentation/android-sdk/overview) - for integrating
  maps into native Android applications.<br />

  (\*) [Maps SDK for iOS](https://developers.google.com/maps/documentation/ios-sdk/overview) - for integrating maps into
  native iOS applications. <br /> ...

## Google Geocoding API

https://developers.google.com/maps/documentation/geocoding/overview

- The `Geocoding API` is a service that accepts a place as an address, latitude and longitude coordinates, or Place ID.
  It converts the address into latitude and longitude coordinates and a Place ID, or converts latitude and longitude
  coordinates or a Place ID into an address.
- Geocoding is powered by the
  [@googlemaps/google-maps-services-js](https://www.npmjs.com/package/@googlemaps/google-maps-services-js) package.

## Google Nearby Search API

https://developers.google.com/maps/documentation/places/web-service/nearby-search (NEW) <br />
https://cloud.google.com/nodejs/docs/reference/places/1.7.0/places/protos.google.maps.places.v1.isearchnearbyrequest
<br/> https://www.npmjs.com/package/@googlemaps/places (NPM)

- [`Places API`](https://developers.google.com/maps/documentation/places/web-service) is a service that accepts HTTP
  requests for location data through a variety of methods. It returns formatted location data and imagery about
  establishments, geographic locations, or prominent points of interest.
- [`Nearby Search`](https://developers.google.com/maps/documentation/places/web-service/nearby-search) takes one or more
  place types, and returns a list of matching places within the specified area. A field mask specifying one or more data
  types is required.
- **Note:** Every request requires a
  [Field Mask](https://developers.google.com/maps/documentation/places/web-service/nearby-search#fieldmask) set outside
  of the request proto. Here is a
  [code snippet](https://stackoverflow.com/questions/79514940/how-to-include-fieldmask-in-nearby-search-new):

  ```js
  const placesNearbyResponse = await placesClient.searchNearby(requestParams, {
    otherArgs: {
      headers: {
        'X-Goog-FieldMask': 'places.displayName',
      },
    },
  });
  ```

- **Note:** the
  [legacy Nearby Search](https://developers.google.com/maps/documentation/places/web-service/search-nearby) is not
  longer available and cannot be enabled.

## Google Maps Platform APIs require API keys; GCP Service Accounts are not supported !!

- [`API keys`](https://developers.google.com/maps/documentation/javascript/get-api-key) are mandatory for authenticating
  Google Maps Platform requests.
- `Service Accounts` are not compatible with the Google Maps Platform APIs. <br />Maps APIs require API keys for
  authentication, as they are not part of the Google Cloud Platform (GCP) IAM authorization system. <br/>This is an
  inherent limitation of the Maps Platform and is unlikely to change.

## API Key Restrictions -> Configure allowed APIs and set resource quotas !!

- **Security**: Key restrictions prevent unauthorized use, safeguarding against abuse and potential breaches.
- **Cost Control**: They limit usage, preventing unexpected spikes and helping adhere to budgets.
- **Best Practice**: They enforce the principle of least privilege, enhancing overall application security.

- [Steps to enable an API key](https://developers.google.com/maps/documentation/javascript/get-api-key)

![](./docs/images/GCP%20API%20Key%20restrictions.png)

## SplashScreen configuration with Expo

https://docs.expo.dev/versions/latest/sdk/splash-screen/ <br />
https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/ <br />

- The `expo-splash-screen` config plugin is the recommended method for configuring the splash screen.

## Environment variables in Expo

https://docs.expo.dev/guides/environment-variables/

- The Expo CLI will automatically load environment variables with an `EXPO_PUBLIC_` prefix from `.env` files for use
  within our code.
- Expo recommends **against** using `NODE_ENV`.

## Environment variables in EAS Build

https://docs.expo.dev/eas/environment-variables/ </br> https://expo.dev/blog/environment-variables

- **.env** files are not included in our EAS Build <br /> After all, EAS Build and Workflows jobs run on a remote serves
  and .env files are usually excluded from our project - listed in .gitignore.
- Expo can store and manage environment variables on EAS servers and synchronizing them with our code.
- Push environment variables from .env file to the selected environment:

```bash
eas env:push --environment <development|preview|production> --path <path to the input `.env` file>
```

## Dynamic app configuration

https://docs.expo.dev/workflow/configuration/

- The app config configures many things such as app name, icon, splash screen, deep linking scheme, API keys to use for
  some services and so on. <br /> For a complete list of available properties, see:
  https://docs.expo.dev/versions/latest/config/app/
- Library authors can extend the app config by using
  [Expo Config plugins](https://docs.expo.dev/config-plugins/introduction/).
- `app.json` and `app.config.json` are **static** config files, meaning all the configurations remain fixed. <br />
  I.e., this restricts us from dynamically changing any value, as we have to hardcode the configurations.
- For **dynamic** customization, we can use the JavaScript (`app.config.js`) or TypeScript (`app.config.ts`).

## Install app variants on the same device

https://docs.expo.dev/build-reference/variants/

- We can have multiple installations of build variants (development, preview, and production) simultaneously on the same
  device. <br /> This allows working in development, previewing the next version of the app, and running the production
  version on a device without needing to uninstall and reinstall the app.
- `eas.json` uses the **APP_VARIANT** environment variable to specify the build variant. <br />Then we configure the
  build in `app.config.js` based on the **APP_VARIANT** value.

## Safe Area Context

https://docs.expo.dev/versions/latest/sdk/safe-area-context/ <br />
https://docs.expo.dev/develop/user-interface/safe-areas/

- Creating a safe area ensures your app screen's content is positioned correctly. This means it doesn't get overlapped
  by notches, status bars, home indicators, and other interface elements that are part of the device's physical hardware
  or are controlled by the operating system.
- `react-native-safe-area-context` provides a flexible API for accessing device safe area inset information. This allows
  you to position your content appropriately around notches, status bars, home indicators, and other such device and
  operating system interface elements.
- It also provides a `SafeAreaView` to render content within the safe area boundaries of a device.
- It's generally recommended to include `StatusBar` within `SafeAreaView` that is nested within a `SafeAreaProvider`.

## React Native StatusBar

https://reactnative.dev/docs/statusbar

- Component to control the app's status bar.
- E.g. `currentHeight` returns the height of the status bar (only in Android; returns `null` in iOS).

## React Navigation

https://reactnavigation.org/

- Library to implement navigation functionality in a React application.

- A `Navigator` is a React component that decides how to render the screens we have defined. It contains `Screen`
  elements as its children to define the configuration for screens.

## Typechecking the Navigator

https://reactnavigation.org/docs/typescript/

- React Navigation can be configured to type-check screens and their params, as well as various other APIs using
  TypeScript.

## Async Storage - Persist data locally on the user's device

https://react-native-async-storage.github.io/async-storage/ </br>
https://github.com/react-native-async-storage/async-storage

- Asynchronous, unencrypted, persistent, key-value storage solution for your React Native application.
- Async Storage can only store string data. In order to store object data, you need to serialize it first.

## Layout with Flexbox

https://reactnative.dev/docs/flexbox#flex

## React Native - TouchableOpacity vs. Pressable

https://reactnative.dev/docs/touchableopacity <br /> https://reactnative.dev/docs/pressable

- `TouchableOpacity` primarily focuses on providing visual feedback by reducing the opacity of the component when it is
  pressed.
- `Pressable` is a more versatile and highly customizable component that provides more control over touch interactions.

## Rendering lists - FlatList & ScrollView

https://reactnative.dev/docs/flatlist <br /> https://reactnative.dev/docs/scrollview

- `FlatList` is a component optimized for handling large lists of data; it efficiently renders only the visible items on
  the screen, conserving memory and improving performance.
- The `FlatList` component also provides scrolling, pull-to-refresh, and item selection features.
- A `ScrollView` is a scrolling container, but it's not ideal as a container for mapping over a large collection of list
  items. This is because it will render the entire list of elements whether they're on-screen or not. A `FlatList`
  component only renders items on screen, which helps improve app performance for long lists.
