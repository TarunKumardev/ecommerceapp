//@ts-nocheck
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "settings": { // Add this settings section
    "react": {
      "version": "detect"
    }
  },
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
    "project": "./tsconfig.json"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    
  }
}
