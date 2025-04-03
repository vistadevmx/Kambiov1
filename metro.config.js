// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Handle all react-native imports with react-native-web
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'web.js', 'web.ts', 'web.tsx'],
  platforms: ['ios', 'android', 'web'],
};

// Configure module resolution for the Stripe React Native module to work on web
config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

module.exports = config;