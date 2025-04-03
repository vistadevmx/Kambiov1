// @ts-check

/** @type {import('expo/config').ExpoConfig} */
const config = {
  name: "Kambio POS",
  slug: "kambio-pos",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  assetBundlePatterns: ["**/*"],
  platforms: ["ios", "android", "web"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.kambio.pos"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.kambio.pos"
  },
  web: {
    favicon: "./assets/images/favicon.png",
    bundler: "metro"
  },
  plugins: ["expo-router"],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: "your-project-id"
    }
  }
};

module.exports = config;