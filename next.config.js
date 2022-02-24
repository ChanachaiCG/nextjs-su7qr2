const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config

    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        path.resolve(__dirname, 'loader/customImageLoader.js'),
        'babel-loader',
        'next-image-loader',
      ],
    });

    return config;
  },
};
