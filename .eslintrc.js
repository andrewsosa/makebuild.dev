module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
  },
};
