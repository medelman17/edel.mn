export function getFormVariants(props) {
  return {
    layout: {
      container: {
        display: "flex",
        flexDirection: "column",
        my: 4,
        width: "100%",
        backgroundColor: "surface",
        padding: [".5rem", "2em"],
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
        text: {
          width: "100%",
          height: "1.5rem",
          lineHeight: "150%",
          paddingLeft: [".25rem", ".875rem"],
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
          maxWidth: [null, "75%", "50%"],
          backgroundColor: "surface",
          color: "text",
          border: "none",
          borderBottom: "0.07rem solid",
          borderBottomColor: "link",
          "::focus": {
            outline: "none",
          },
        },
        select: {
          picker: {
            color: "text",
            bg: "surface",
            paddingLeft: [".25rem", ".875rem"],
            paddingTop: ".5rem",
            paddingBottom: ".5rem",
            border: "0.07rem solid",
            borderColor: "link",
            marginTop: 1,
            "::focus": {
              outline: "none",
            },
          },
          option: {},
        },
        textarea: {
          color: "text",
          bg: "surface",
          paddingLeft: [".25rem", ".875rem"],
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