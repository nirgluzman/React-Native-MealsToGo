//
// Configure Metro bundler to handle Firebase JS SDK.
// https://docs.expo.dev/guides/using-firebase/#configure-metro
//

const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;
