import withNuxt from './.nuxt/eslint.config.mjs'
import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'

const compat = new FlatCompat()
const tailwindCompatConfig = compat.config({
  extends: ['plugin:tailwindcss/recommended'],
})

export default withNuxt(
  ...tailwindCompatConfig,
  eslintConfigPrettier
)
