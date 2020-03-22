module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'space-in-parens': ['error', 'always'],
    'semi' : 'off',
    'react/prop-types' : 'off',
    'array-bracket-spacing' : 'always',
    "key-spacing": [2, {
      "singleLine": {
          "beforeColon": false,
          "afterColon": true
      },
      "multiLine": {
          "beforeColon": true,
          "afterColon": true,
          "align": "colon"
      }
  }]
  },
}
