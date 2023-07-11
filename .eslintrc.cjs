//@ts-nocheck
module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "standard-with-typescript",
      "plugin:react/recommended",
      "prettier"
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": "./tsconfig.json" // Add this line.
    },
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off" ,// Add this line to disable the rule
        "prettier/prettier": "error"
    }
  }
  