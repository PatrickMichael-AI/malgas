import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  {
    ignores: [".next/**", "dist/**", "dist-ssr/**"],
  },
  ...nextCoreWebVitals,
]

export default eslintConfig
