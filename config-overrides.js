/**
 * Created by balthazar on 6/28/17.
 */
/* eslint-disable */
const { injectBabelPlugin } = require('react-app-rewired');
const argv = require('yargs').argv;

module.exports = function override(config, env, module = argv.module || 'driver') {
  // load babel polyfill before any lib
  config.entry.splice(0, 0, require.resolve('babel-polyfill'));

  // This is only necessary because webpack 2 still can't do es6 tree-shaking properly,
  // especially when it involves re-exports (export * from)
  const distFolder = env === 'production' ? 'es' : 'lib';
  injectBabelPlugin(
    // https://www.npmjs.com/package/babel-plugin-transform-imports
    [require('babel-plugin-transform-imports'), {
      "gm-react-components": {
        transform: "gm-react-components/" + distFolder + `/driverComponents`,
        skipDefaultConversion: true,
        preventFullImport: true
      }
    }], config);

  // add worker-loader
  config.module.rules.push({
    test: /\.worker\.js$/,
    loader: require.resolve('worker-loader')
  });

  return config;
};
