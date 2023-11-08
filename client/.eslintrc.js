module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "public/",
    "build/",
    "*.min.js",
    "src/dev/"
  ],
  rules: {
    semi: [1, "always"],
    "space-before-function-paren": "off",
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "no-unused-vars": "warn"
  }
};
