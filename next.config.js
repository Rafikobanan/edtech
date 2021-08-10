const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
      @import "./styles/variables.scss";
      @import "./styles/mixins.scss";
    `
  }
};

module.exports = withPlugins(
  [
    [
      optimizedImages
    ]
  ],
  nextConfig
);
