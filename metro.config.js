const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Enable tree shaking and minification
config.transformer.minifierConfig = {
  keep_fnames: false,
  mangle: {
    keep_fnames: false,
  },
};

// Optimize resolver for faster builds
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Cache configuration for faster subsequent builds
config.cacheStores = [
  {
    name: 'filesystem',
    root: '/tmp/metro-cache',
  },
];

// Completely disable sourcemaps for faster deployment
config.serializer = {
  ...config.serializer,
  createModuleIdFactory: () => (path) => {
    // Use shorter module IDs for smaller bundles
    return require('crypto').createHash('md5').update(path).digest('hex').substr(0, 8);
  },
  // Disable source maps entirely
  sourceMapUrl: null,
  sourceMaps: false,
};

module.exports = config;