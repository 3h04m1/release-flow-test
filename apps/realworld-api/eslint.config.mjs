/**
 * ESLint configuration for the `realworld-api` project.
 * Tailored for TypeScript/JavaScript with best practices and code quality plugins.
 */

// -------------------- Imports --------------------
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import sonarjs from "eslint-plugin-sonarjs";
import security from "eslint-plugin-security";
import decoratorPosition from "eslint-plugin-decorator-position/config/recommended";
import jsdoc from "eslint-plugin-jsdoc";

// -------------------- Ignore Patterns --------------------
const ignores = [
  "**/dist/**",
  "**/node_modules/**",
  "**/*.mjs",
  "eslint.config.mjs",
  "**/*.js",
];

// -------------------- Base & Plugin Configs --------------------
const baseConfigs = [
  js.configs.recommended,
  importPlugin.flatConfigs.typescript,
  security.configs.recommended,
  sonarjs.configs.recommended,
  decoratorPosition,
  js.configs.recommended,
  jsdoc.configs['flat/recommended-typescript-error'],
  ...tseslint.configs.strictTypeChecked,
];

// -------------------- TypeScript/TSX Rules --------------------
const typescriptRules = {
  // Import order and style
  "import/order": [
    "error",
    {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always",
      alphabetize: { order: "asc", caseInsensitive: true },
    },
  ],

  // TypeScript best practices
  "@typescript-eslint/no-explicit-any": "warn",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/explicit-member-accessibility": [
    "error",
    {
      accessibility: "explicit",
      overrides: { constructors: "no-public" },
    },
  ],
  "@typescript-eslint/member-ordering": [
    "warn",
    {
      default: [
        "signature",
        "public-static-field",
        "protected-static-field",
        "private-static-field",
        "public-instance-field",
        "protected-instance-field",
        "private-instance-field",
        "constructor",
        "public-static-method",
        "protected-static-method",
        "private-static-method",
        "public-instance-method",
        "protected-instance-method",
        "private-instance-method",
      ],
    },
  ],
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/no-unsafe-argument": "warn",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
  "@typescript-eslint/switch-exhaustiveness-check": "warn",

  // Naming conventions
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "interface",
      format: ["PascalCase"],
      custom: { regex: "^I[A-Z]", match: true },
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
    {
      selector: "enum",
      format: ["PascalCase"],
      custom: { regex: "Enum$", match: true },
    },
    {
      selector: "enumMember",
      format: ["UPPER_CASE"],
    },
  ],

  // JSDoc rules
  'jsdoc/require-jsdoc': [
    'warn',
    {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: false,
        FunctionExpression: false,
      },
    },
  ],
  'jsdoc/require-param': 'warn',
  'jsdoc/require-returns': 'warn',
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-returns-type': 'off',

  // General JS/TS rules
  "require-await": "error",
  "no-console": ["warn", { allow: ["warn", "error"] }],
  "no-debugger": "error",

  // Import plugin rules
  "import/no-relative-packages": "error",
  "import/no-relative-parent-imports": "warn",

  // Decorator plugin
  "decorator-position/decorator-position": ["error", { printWidth: 120 }],

  // SonarJS rules
  "sonarjs/cognitive-complexity": ["warn", 15],
  "sonarjs/no-duplicate-string": "warn",
  "sonarjs/no-identical-functions": "warn",
  "sonarjs/no-small-switch": "warn",

  // Prettier
  ...prettier.rules,
};

// -------------------- Exported ESLint Config --------------------
export default tseslint.config(
  {
    ignores,
  },
  {
    files: ["src/**/*.ts"],
  },
  ...baseConfigs,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: typescriptRules,
  },
);
