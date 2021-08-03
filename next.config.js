const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx']
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false
      }
    ]
  ],
  nextConfig
);
