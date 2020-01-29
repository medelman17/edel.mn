exports.getMessyVariants = function getMessyVariants(props) {
  return {
    image: {
      avatar: {
        width: [100, 100],
        height: [100, 100],
        borderRadius: 999999,
        boxShadow: "rgba(15, 17, 21, 0.35) 0px 3px 6px 0px",
      },
    },
    links: {
      navigation: {
        fontFamily: "body",
        fontWeight: "heading",
        lineHeight: 1.5,
        color: "text",
        paddingRight: 3,
        "&:last-child": {
          paddingRight: 3,
        },
      },
      "list-item": {
        fontFamily: "body",
        lineHeight: ["body", "heading"],
        fontWeight: "heading",
        fontSize: [2, 3],
        textDecoration: "none",
      },
      body: {
        color: "text",
      },
    },
    buttons: {
      icon: {
        fill: "text",
      },
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "auto",
      boxShadow: "rgba(15, 17, 21, 0.35) 0px 6px 9px 0px",
      borderRadius: "8px",
      // padding: [".5rem", "2em"],
      bg: "surface",
      overflow: "hidden",
      transition:
        "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
    },
  }
}

// cards: {

//   carousel: {
//     bg: "background",
//     display: "grid",
//     gridGap: "10px",
//     gridColumn: "1 / -1",
//     gridAutoFlow: "column",
//     gridTemplateColumns: "10px repeat(6, calc(50% -40px)) 10px",
//     gridTemplateRows: "minmax(150px, 1fr)",
//     overflowX: "scroll",
//     "::before": {
//       content: '""',
//     },
//     "::after": {
//       content: '""',
//     },
//   },
//   large: {},
//   medium: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "background",
//     overflow: "hidden",
//     borderRadius: "0.5em",
//     boxShadow: "rgba(15, 17, 21, 0.2) 0px 3px 6px 0px",
//     maxWidth: ["400px", "600px"],
//     scrollSnapAlign: "center",
//     transition:
//       "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
//   },
//   small: {
//     display: "flex",
//     flexDirection: "column",
//     flexGrow: 1,
//     backgroundColor: "background",
//     my: 1,
//     color: "subdued",
//     overflow: "hidden",
//     borderRadius: "0.5em",
//     boxShadow: "rgba(15, 17, 21, 0.2) 0px 3px 6px 0px",
//     maxWidth: "300px",
//     transition:
//       "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
//   },
// },
