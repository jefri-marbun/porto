// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.push({
          test: /\.mjs$/,
          type: 'javascript/auto',
        });
  
        webpackConfig.ignoreWarnings = [
          function ignoreSourceMapWarnings(warning) {
            return warning.message.includes("Failed to parse source map");
          },
        ];
  
        return webpackConfig;
      },
    },
  };
  