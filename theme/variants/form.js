exports.getFormVariants = function getFormVariants(props) {
  return {
    layout: {
      container: {
        display: "flex",
        flexDirection: "column",
        my: 0,
        width: ["100%", "100%", "66%"],
        // boxShadow: "rgba(15, 17, 21, 0.35) 0px 3px 6px 0px",
        // backgroundColor: "surface",
        // padding: ["2rem 1.15rem", "3rem 6rem"],

        borderRadius: "8px",
        overflow: "hidden",
        transition:
          "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
      },
      header: {
        marginBottom: 3,
      },
      body: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 2,
        justifyContent: "space-between",
        paddingBottom: 2,
      },
      footer: {
        display: "flex",
      },
    },
    title: {},
    instructions: {},
    label: {
      fontWeight: "500",
    },
    control: {
      submit: {
        border: ".07rem solid",

        borderColor: "background",
        borderRadius: "8px",
        bg: "surface",
        padding: "5px 20px",
        "&:disabled": {
          bg: "background",
        },
        "::focus": {
          outline: "none",
        },
      },
      reset: {
        border: ".07rem solid",
        borderColor: "text",
        borderRadius: "8px",
        bg: "surface",
        padding: "5px 20px",
        marginLeft: "5px",
        color: "text",
        "::focus": {
          outline: "none",
        },
      },
    },
    field: {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& > select": {
          color: "text",
          bg: "background",
          paddingLeft: [".25rem", ".875rem"],
          maxWidth: [null, "75%", "100%"],
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
          border: "0.07rem solid",
          borderColor: "link",
          marginTop: 1,
          "::focus": {
            outline: "none",
          },
        },
        "& > input:hover": {},
        "&  > input:focus": {
          outline: "none",
        },
        "&  > select:focus": {
          outline: "none",
        },
        "&  > textarea:focus": {
          outline: "none",
        },
      },
      error: {
        container: {
          minHeight: "1.5em",
          fontSize: 1,
          color: "red",
        },
        message: {},
      },
      type: {
        email: {
          width: "100%",
          height: "1.5rem",
          lineHeight: "150%",
          paddingLeft: [".25rem", ".875rem"],
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
          maxWidth: [null, "75%", "100%"],
          backgroundColor: "background",
          color: "text",
          border: "none",
          borderBottom: "0.07rem solid",
          borderBottomColor: "link",
          "::focus": {
            outline: "none",
          },
        },
        text: {
          width: "100%",
          height: "1.5rem",
          lineHeight: "150%",
          paddingLeft: [".25rem", ".875rem"],
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
          maxWidth: [null, "75%", "100%"],
          backgroundColor: "background",
          color: "text",
          border: "none",
          borderBottom: "0.07rem solid",
          borderBottomColor: "link",
          "::focus": {
            outline: "none",
          },
        },
        select: {},
        textarea: {
          color: "text",
          bg: "background",
          paddingLeft: [".25rem", ".875rem"],
          maxWidth: [null, "75%", "100%"],
          border: "0.07rem solid",
          borderColor: "link",
          borderRadius: "8px",
          minHeight: "5rem",
          "::focus": {
            outline: "none",
          },
        },
        checkbox: {},
      },
    },
  }
}
