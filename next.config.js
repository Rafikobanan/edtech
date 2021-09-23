const path = require('path');

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
      @import "./styles/variables.scss";
      @import "./styles/mixins.scss";
    `
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
