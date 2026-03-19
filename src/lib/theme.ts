export type Theme = "light" | "dark"

export const THEME_STORAGE_KEY = "salt-and-fynbos-theme"

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function resolveThemePreference(storedTheme: string | null): Theme {
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme
  }

  return getSystemTheme()
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement

  root.dataset.theme = theme
  root.style.colorScheme = theme
}

export const themeInitScript = `
  (() => {
    try {
      const root = document.documentElement;
      const storedTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
      const theme =
        storedTheme === "dark" || storedTheme === "light"
          ? storedTheme
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    } catch {
      document.documentElement.dataset.theme = "light";
      document.documentElement.style.colorScheme = "light";
    }
  })();
`
