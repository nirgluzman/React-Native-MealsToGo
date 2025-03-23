//
// Dynamic configuration for 'app.json'.
// https://docs.expo.dev/tutorial/eas/multiple-app-variants/
// https://docs.expo.dev/workflow/configuration/
// https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
//
// This file allows you to define different configurations for your Expo app based on the environment,
// enabling you to create development, preview, and production builds with distinct settings.
//

import { ExpoConfig, ConfigContext } from 'expo/config';

// identify the build type using the APP_VARIANT environment variable (defined in eas.json).
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

// suffix for the app's name based on the build variant.
const getAppNameSuffix = (): string => {
  if (IS_DEV) {
    return '(Dev)';
  }

  if (IS_PREVIEW) {
    return '(Preview)';
  }
  // return an empty string for production builds (no suffix).
  return '';
};

// suffix for the Android package name (unique identifier for our Android app) based on the build variant.
const getPackageSuffix = (): string => {
  if (IS_DEV) {
    return '.dev';
  }

  if (IS_PREVIEW) {
    return '.preview';
  }
  // return an empty string for production builds (no suffix).
  return '';
};

// function to take the current Expo configuration `app.json' as input and returns a modified version.
// the return value from the dynamic config is used as the final config.
// https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  // destructure config
  const { name = '', android = {} } = config;
  const { package: androidPackage = '' } = android;

  const appName = `${name}${getAppNameSuffix()}`; // dynamically append a suffix to the app's name based on the build variant.
  const packageName = `${androidPackage}${getPackageSuffix()}`; // dynamically append a unique identifier to the Android package name.

  // construct the android config
  const androidConfig = {
    ...android,
    package: packageName, // override the Android package name (unique identifier for Android apps).
    ...(android.config && {
      // safely handle the case when android.config is undefined.
      config: {
        ...android.config,
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? '', // ?? operator - use an empty string if the API key is null or undefined.
        },
      },
    }),
  };

  return {
    ...config,
    name: appName,
    android: androidConfig,
    // add more platform-specific configurations here if needed.
  };
};
