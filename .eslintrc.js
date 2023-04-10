module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "node", "functional", "import", "unicorn"],
    parserOptions: {
      ecmaVersion: 2020,
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json", "./tsconfig.test.json"],
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "prettier",
    ],
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // Extra configuration for recommended rules
      // Disable the ESLint base version and configure the special Typescript version
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-inferrable-types": [
        "warn",
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],
      "@typescript-eslint/no-misused-promises": [
        "warn",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "warn",
        {
          allowNullish: true,
          allowBoolean: true,
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        "warn",
        { functions: false, enums: false, classes: true, variables: true },
      ],
  
      // Disabling recommended rules
      "no-case-declarations": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-confusing-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
  
      // Extra rules
      eqeqeq: ["warn"],
      "no-param-reassign": ["warn"],
      "@typescript-eslint/no-base-to-string": ["warn"],
      "@typescript-eslint/no-extraneous-class": ["warn"],
      "@typescript-eslint/switch-exhaustiveness-check": ["warn"],
      "@typescript-eslint/prefer-optional-chain": ["warn"],
      "@typescript-eslint/return-await": ["warn", "in-try-catch"],
      "@typescript-eslint/no-throw-literal": ["warn"],
      "@typescript-eslint/no-shadow": ["warn"],
      "no-console": ["warn"],
  
      // Load all environment variables in the env validator and then through the config/module.
      "node/no-process-env": ["warn"],
  
      // Prefer Promise-based APIs over warn-first callback APIs
      "node/prefer-promises/dns": ["warn"],
      "node/prefer-promises/fs": ["warn"],
  
      // Use central Joi with good configuration and extensions
      "@typescript-eslint/no-restricted-imports": [
        "warn",
        {
          name: "joi",
          message: "Please only import Joi as the default export from src/Joi.ts",
          allowTypeImports: true,
        },
        {
          name: ".prisma/client",
          message: "Please use @prisma/client instead.",
        },
      ],
  
      "@typescript-eslint/no-require-imports": ["warn"],
  
      "functional/immutable-data": ["warn"],
      "functional/no-let": ["warn"],
  
      "import/no-restricted-paths": [
        "warn",
        {
          zones: [
            {
              target: "./src/data",
              from: "./src/services",
            },
          ],
        },
      ],
  
      "no-duplicate-imports": ["warn"],
      "unicorn/filename-case": [
        "warn",
        {
          case: "camelCase",
        },
      ],
    },
    env: {
      node: true,
      es6: true,
    },
  };
  