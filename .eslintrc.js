module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'object-shorthand': 0,
    'no-useless-constructor': 0,
    'no-console': 'off',
    'no-useless-escape': 'off',
    'selector-pseudo-element-no-unknown': [
      0,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
}
