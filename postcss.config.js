module.exports = {
  plugins: [
    require('postcss-variables')({
      globals: {
        module: `'gm-react-components/es/theme/driver/index.pcss'`
      }
    }),
    require('postcss-easy-import')({ extensions: ['.css', '.pcss', '.svg'] }),
    require('postcss-url')(),
    require('postcss-apply')(),
    require('postcss-cssnext')({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    }),
    require('postcss-nesting')(),
    require('postcss-reporter')(),
  ]
};
