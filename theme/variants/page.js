exports.getPageVariants = function getPageVariants(props) {
  return {
    container: {},
    hero: {
      // maxWidth: [null, null, "85%"],
    },
    heading: {
      one: {},
    },
    description: {},
    "section-divider": {
      borderColor: "subdued",
      border: "1px solid",
      my: 2,
    },
    body: {
      paper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        boxShadow: "rgba(15, 17, 21, 0.35) 0px 6px 9px 0px",
        borderRadius: "8px",
        padding: [".5rem", 0],
        bg: "surface",
        overflow: "hidden",
        transition:
          "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
      },
      mobile: {
        px: 1,
      },
      default: {
        px: 2,
      },
    },
  }
}
