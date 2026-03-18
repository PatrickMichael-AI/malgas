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
        dune: "hsl(var(--dune))",
        foam: "hsl(var(--foam))",
        fynbos: "hsl(var(--fynbos))",
        apricot: "hsl(var(--apricot))",
        sea: "hsl(var(--sea))",
        ink: "hsl(var(--ink))",
        kelp: "hsl(var(--kelp))",
        sun: "hsl(var(--sun))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        paper: "0 24px 55px rgba(32, 56, 62, 0.1)",
        float: "0 36px 88px rgba(24, 50, 58, 0.14)",
        tide: "0 22px 48px rgba(18, 45, 52, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      backgroundImage: {
        "coast-wash":
          "radial-gradient(circle at 12% 14%, rgba(255, 209, 145, 0.3), transparent 26%), radial-gradient(circle at 84% 16%, rgba(147, 201, 204, 0.28), transparent 22%), radial-gradient(circle at 72% 76%, rgba(211, 137, 102, 0.16), transparent 20%), linear-gradient(180deg, rgba(251, 247, 239, 0.98), rgba(245, 239, 229, 0.96))",
      },
    },
  },
  plugins: [],
}

export default config
