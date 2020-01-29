import { mobile } from "./mobile"
import { browser } from "./browser"

const commonOverrides = {
  shadows: [
    "none",
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
    "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
  ],
  layout: {
    container: {
      display: "flex",
      flexDirection: "column",
      marginTop: "2rem",
      maxWidth: "800px",
      px: [2, 2, 0],
    },
    header: {
      display: "flex",
      flexDirection: "column",
    },
    body: {
      display: "flex",
      flexDirection: "column",
    },
    footer: {
      display: "flex",
      flexDirection: "column",
    },
  },
}

export function createModuleTheme(options) {
  const { isMobile } = options
  return existingTheme => {
    const themeOverrides = isMobile ? mobile : browser
    return {
      ...existingTheme,
      ...commonOverrides,
      ...themeOverrides,
    }
  }
}
