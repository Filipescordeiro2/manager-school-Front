const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
    url: require.resolve("url/"),
    util: require.resolve("util/"),
    assert: require.resolve("assert/"),
    zlib: require.resolve("browserify-zlib"),
  };

  return config;
};
