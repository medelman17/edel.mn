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
        "& p": {
          px: 4,
        },
        "& h1": {
          px: 4,
          mx: 0,
        },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        boxShadow: "rgba(15, 17, 21, 0.35) 0px 3px 6px 0px",
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
        px: 0,
      },
    },
  }
}
