/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'no-descending-specificity': null,
    'prettier/prettier': true,
  },
};

export default config;
