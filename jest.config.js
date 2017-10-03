module.exports = {
  verbose: true,
  globals: {
    __dev__: true,
    __DEV__: true,
  },

  modulePaths: [
    '<rootDir>',
    '<rootDir>/src',
  ],

  testMatch: [
    '**/__tests__/**/?(*.)(spec|test).js?(x)',
  ],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  browser: true,
};
