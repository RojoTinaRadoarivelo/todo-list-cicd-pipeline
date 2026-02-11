// eslint.config.js
// @ts-check

const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

const angular = require("@angular-eslint/eslint-plugin");
const angularTemplate = require("@angular-eslint/eslint-plugin-template");
const angularParser = require("@angular-eslint/template-parser");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".angular/**",
      ".vscode/**",
      "coverage/**",
    ],
  },

  ...tseslint.config({
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ],
    plugins: {
      "@angular-eslint": angular,
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  }),

  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularParser,
    },
    plugins: {
      "@angular-eslint/template": angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
      ...angularTemplate.configs.accessibility.rules,
    },
  },
];
