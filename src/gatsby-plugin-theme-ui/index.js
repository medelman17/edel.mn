import { createTheme, nordDark, nordLight } from "../../theme"

const theme = createTheme({
  colors: {
    ...nordLight,
    modes: {
      light: nordLight,
      dark: nordDark,
    },
  },
})

export default theme
