module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
          '_fetchOptions',
          '_cardEndpoint',
          '_cardLikeEndpoint',
          '_goREST',
          '_authOptions',
        ],
        enforceInMethodNames: true,
        allowAfterThis: true,
      },
    ],
  },
};
