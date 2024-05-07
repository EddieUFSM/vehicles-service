import globals from "globals"
import pluginJs from "@eslint/js"
import mochaPlugin from 'eslint-plugin-mocha'

export default [
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    rules: {
      "prefer-const": "error",
      semi: ['error', 'never'],
      indent: ['error', 2]
    }
  },
  pluginJs.configs.recommended,
  mochaPlugin.configs.flat.recommended
]