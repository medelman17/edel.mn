exports.getTextVariants = function getTextVariants(colors) {
  return {
    paragraph: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: [1, 2],
      marginBottom: 3,
    },
    lede: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: [2, 2],
    },
    h1: {
      color: "text",
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: 1.2,
      fontSize: [4, 5],
    },
    h2: {
      color: "text",
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [3, 4],
      lineHeight: 1.2,
      marginBottom: 3,
    },
    h3: {
      color: "text",
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [2, 3],
    },
  }
}
