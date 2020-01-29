export const theme = existingTheme => {
  return {
    ...existingTheme,
    images: {
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 999999,
        boxShadow: 2,
      },
      "list-item": {},
    },
  }
}
