module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    '@react-native-community',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'object-curly-spacing': 2,
    '@typescript-eslint/no-unused-expressions': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'import/no-default-export': 'error',
    'interface-name-prefix': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'react-native/no-inline-styles': 0,
    'class-methods-use-this': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'prettier/prettier': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'import/order': ['error', {
      groups: [
        ['external', 'builtin'],
        'internal',
        ['parent', 'sibling', 'index'],
      ],
    }],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/extensions': 0,
    'max-len': ['error', 110],
    '@typescript-eslint/member-ordering': 'error',
    'lines-between-class-members': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/camelcase': 0,
    'object-curly-newline': 0,
    'react/require-default-props': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
