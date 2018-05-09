module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },

  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "mocha": true
  },

  "plugins": [
    "standard",
    "promise",
    "react",
    "react-perf",
    "import"
  ],

  "globals": {
    "document": false,
    "navigator": false,
    "window": false,
    "CustomElements": false,
    "cordova": false,
    "expect": false,
    "mount": false,
    "spy": false,
    "assert": false,
    "shallow": false,
    "render": false
  },

  "extends": ["react-app", "airbnb", "plugin:react-perf/recommended"],

  "rules": {
    "indent": "off",
    "no-plusplus": "off", // we want to use ++ and --, specially in for loops
    "comma-dangle": "off", // prevent this causes a lot of useless work and git diffs
    "react/jsx-space-before-closing": "off", // against Jetbrains defaults
    "react/jsx-tag-spacing": "off", // effort was too high for the moment+payoff
    "react/forbid-prop-types": "off", // effort was too high for the moment+payoff
    "react/require-default-props": "off", // effort was too high for the moment+payoff
    "jsx-a11y/no-static-element-interactions": "off", // we need to set onClick handlers on divs for mobile touch
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // https://github.com/facebook/create-react-app/issues/290
    "import/prefer-default-export": "off", // webstorm doesn't detect usage of default export

    "react/jsx-no-bind": ["error",
      {
        "ignoreRefs": false,
        "allowArrowFunctions": false,
        "allowBind": false
      }
    ], // avoid causing rerendering due to new declarations inside render
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }], // 120 is the Jetbrains default
    "quote-props": ["error", "consistent-as-needed"], // Just be consistent
    "no-param-reassign": ["error", { "props": false }], // we want to allow assigning to argument keys (reduce's accumulators)

    "standard/object-curly-even-spacing": ["error", "either"],
    "standard/array-bracket-even-spacing": ["error", "either"],
    "standard/computed-property-even-spacing": ["error", "even"],

    "promise/param-names": 2
  }
};
