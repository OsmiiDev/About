module.exports = {
  "root": true,
  "env": {
    "es2021": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "google",
    "next/core-web-vitals",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "always", {
      "objectsInObjects": false,
      "arraysInObjects": false,
    }],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "max-len": ["error", 200],
    "require-jsdoc": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
  },
};
