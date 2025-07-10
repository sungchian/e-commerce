import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import vue from "eslint-plugin-vue";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    files: ["**/*.vue"],
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs.recommended.rules,
      ...vue.configs["vue3-recommended"].rules,
    },
  },
  {
    ignores: ["dist", "node_modules"],
  }
);
