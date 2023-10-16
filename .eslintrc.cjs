module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

// {
//   "parserOptions": {
//     "ecmaVersion": 7,
//     "sourceType": "module"
//   },
//   "rules": {
//     "no-console": "warn",
//     "no-unused-vars": "off",
//     "@typescript-eslint/no-unused-vars": [
//       "warn",
//       {
//         "varsIgnorePattern": "^_",
//         "argsIgnorePattern": "^_",
//         "caughtErrorsIgnorePattern": "^_"
//       }
//     ],
//     "@typescript-eslint/no-var-requires": "warn",
//     "no-nested-ternary": "warn"
//   }
// }
