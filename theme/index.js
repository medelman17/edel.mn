const { getVariants } = require("./variants")
const { fonts, fontSizes, fontWeights } = require("./fonts")
const { space } = require("./space")
const themeColors = require("./colors")

function createTheme(props) {
  const { colors } = props
  const variants = getVariants(props)

  return {
    useColorSchemeMediaQuery: true,
    shadows: [
      "none",
      "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
    ],
    styles: {
      root: {
        fontSize: ["16px", "16px"],
      },
    },
    fonts,
    fontSizes,
    fontWeights,
    space,
    colors,
    ...variants,
  }
}

module.exports = {
  createTheme,
  ...themeColors,
}
