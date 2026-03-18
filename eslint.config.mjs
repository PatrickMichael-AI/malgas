import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  {
    ignores: ["dist/**", "dist-ssr/**"],
  },
  ...nextCoreWebVitals,
]

export default eslintConfig
