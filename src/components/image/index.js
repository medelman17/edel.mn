/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import PropTypes from "prop-types"
import { theme } from "./theme"
import { Avatar } from "./avatar"
import { ListItemImage } from "./list-item"

const strategy = {
  avatar: Avatar,
  "list-item": ListItemImage,
}

const factory = {
  name: "Image",
  create(type) {
    const strategies = Object.keys(this.strategy)
    if (!type || !strategies.includes(type)) {
      return this.default
    }
    return this.strategy[type]
  },
  strategy,
  default: props => {
    console.warn(
      `[IMAGE FACTORY]: You forgot to supply a component type or the type supplied is not supported.`
    )
    return <div>{props.children}</div>
  },
}

export function Image({ type, ...props }) {
  const Component = factory.create(type)
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}
