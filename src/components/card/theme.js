const author = {
  display: "flex",
  marginLeft: "-1rem",
  marginRight: "-1rem",
  marginTop: "2rem",
  boxShadow: 2,
  py: "3rem",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  borderRadius: "0.5em",
  px: "2rem",
  transition:
    "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
}

const listItem = {
  overflow: "hidden",
  borderRadius: "0.5em",
  boxShadow: "rgba(15, 17, 21, 0.35) 0px 3px 6px 0px",
  transition:
    "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
}

const carouselItem = {}

export const theme = existingTheme => {
  return {
    ...existingTheme,
    cards: {
      author,
      listItem,
      carouselItem,
    },
  }
}
