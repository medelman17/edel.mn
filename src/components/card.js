/** @jsx jsx */
import { jsx } from "theme-ui"
// import PropTypes from "prop-types"

const CardStrategy = {
  default: DefaultCard,
  author: AuthorCard,
}

export function CardFactory({ type, ...props }) {
  const Component = CardStrategy[type]
  return <Component {...props} />
}

CardFactory.defaultProps = {
  type: "default",
}

function DefaultCard(props) {
  const variant = getCardSizeVariant(props)
  const bg = getCardBackgroundColor(props)
  return <div sx={{ variant, bg }}>{props.children}</div>
}

function AuthorCard(props) {
  const variant = "cards.author"
  const bg = getCardBackgroundColor(props)
  return (
    <div
      sx={{
        // border: "1px solid",
        // borderColor: "text",
        // overflow: "hidden",
        // borderRadius: "0.5em",
        display: "flex",
        flexDirection: "row",
        boxShadow: 0,
        py: "1rem",

        // bg: "surface",

        justifyContent: "space-between",

        // marginLeft: "-40px",
        // marginRight: "-40px",
      }}
    >
      {props.children}
    </div>
  )
}

function getCardSizeVariant(props) {
  return "cards.medium"
}

function getCardBackgroundColor(props) {
  const { asPaper } = props
  if (asPaper) {
    return "surface"
  } else return "background"
}
