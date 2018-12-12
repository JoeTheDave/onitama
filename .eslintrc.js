module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "airbnb"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "babel",
  ],
  // teach eslint about global variables (specifically from WebpackDefine plugin)
  // 'false' means the variable should be immutable
  "globals":{
    __DEV__: false,
    __PROD__: false,
    expect: false,
    jest: false,
  },
  "rules": {
    // ################################################################################################################
    // # Deliberate rules
    // ################################################################################################################
    "react/jsx-filename-extension": [0],
    "vars-on-top": [0],
    "max-len": [0],
    "no-case-declorations": [0],
    "eqeqeq": ['error', 'smart'],
    "prefer-const": ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    }],
    "func-names": ['warn', 'as-needed'],
    "camelcase": ["error", {properties: "never"}],
    "no-param-reassign": 0,
    "radix": 0,
    "no-mixed-operators": 0,
    "import/prefer-default-export": 0,

    // ################################################################################################################
    // Copied and Pasted (should be audited to make sure these are desired)
    // ################################################################################################################
    "class-methods-use-this": [0],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'WithStatement',
    ],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "only-multiline",
    }],
    "no-underscore-dangle": [0],
    "import/extensions": ["error", { "js": "never", "json": "always" }],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": false }],


    // ################################################################################################################
    // # Disabled due to problems or bugs with plugin, check if problems persist
    // ################################################################################################################
    "import/no-unresolved": [0], // Conflicts with npm pathing
    "global-require": [0], // Conflicts with static image requires
    "import/no-mutable-exports": [0], // Conflicts with exporting react components
    "import/named": [0],
    // This one might be fixable via: import/core-modules settings
    "import/no-extraneous-dependencies": [0],
    "import/no-named-as-default": 0, // Inhibits the ability to export a plain version of a component by the same name for testing purposes.
    "import/first": 0, // We have our own absolute imports like grx-common that are internal to the project and not from npm.  These should be alphabetized with the rest of the local imports.

    // Good rule, but sometimes we want to break it. Need to make it conditional
    "import/no-named-as-default": [0],

    // ################################################################################################################
    // # Rules to Revisit later
    // ################################################################################################################
    // To be revisited later (don't want to adhere to them now, but would like to possibly later)
    "react/sort-comp": [0],

    "react/forbid-prop-types": [0],
    "react/jsx-boolean-value": [0],
    "no-plusplus": [0],
    "guard-for-in": [0],
    "operator-assignment": [0],

    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/alt-text": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/no-redundant-roles": [0],
    "jsx-a11y/label-has-for": [0],
  }
};
