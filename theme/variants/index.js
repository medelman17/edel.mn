const { getLayoutVariants } = require("./layout")
const { getTextVariants } = require("./text")
const { getMessyVariants } = require("./messy")
const { getCardVariants } = require("./cards")
const { getPageVariants } = require("./page")
const { getFormVariants } = require("./form")

exports.getVariants = function getVariants(props) {
  return {
    layout: getLayoutVariants(props),
    text: getTextVariants(props),
    cards: getCardVariants(props),
    page: getPageVariants(props),
    form: getFormVariants(props),
    ...getMessyVariants(props),
  }
}
