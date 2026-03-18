import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        sand: "hsl(var(--sand))",
        fynbos: "hsl(var(--fynbos))",
        apricot: "hsl(var(--apricot))",
        sea: "hsl(var(--sea))",
        ink: "hsl(var(--ink))",
        sun: "hsl(var(--sun))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        paper: "0 20px 45px rgba(38, 58, 66, 0.12)",
        float: "0 28px 70px rgba(53, 81, 80, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      backgroundImage: {
        "coast-wash":
          "radial-gradient(circle at top left, rgba(255, 213, 128, 0.26), transparent 34%), radial-gradient(circle at top right, rgba(166, 220, 228, 0.38), transparent 26%), linear-gradient(180deg, rgba(255, 250, 243, 0.96), rgba(253, 248, 241, 1))",
      },
    },
  },
  plugins: [],
}

export default config
