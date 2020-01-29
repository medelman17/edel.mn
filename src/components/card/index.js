/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import PropTypes from "prop-types"
import { theme } from "./theme"
import { AuthorCard } from "./author"
import { ListItemCard } from "./list-item"

const CardStrategy = {
  author: AuthorCard,
  "list-item": ListItemCard,
}

const CardFactory = {
  create(type) {
    const strategies = Object.keys(this.strategy)
    if (!type || !strategies.includes(type)) {
      return this.default
    }
    return this.strategy[type]
  },
  strategy: CardStrategy,
  default: DefaultCard,
}

export function Card({ type, ...props }) {
  const Component = CardFactory.create(type)
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(["author", "listItem", "carouselItem"]),
  bg: PropTypes.oneOf(["background", "surface"]),
  el: PropTypes.oneOf([0, 1, 2]),
}

Card.defaultProps = {
  bg: "background",
  el: 0,
}

function DefaultCard(props) {
  console.warn(
    "[CARD FACTORY]: You forgot to supply a card type or the type supplied is not supported."
  )
  return <div>{props.children}</div>
}
