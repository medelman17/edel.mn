/** @jsx jsx */
import { jsx } from "theme-ui"

const GridStrategy = {
  default: DefaultCardGrid,
  horizontal: HorizontalCardGrid,
  listItem: ListItemCardGrid,
}

export function CardGridFactory({ type, ...props }) {
  const Component = GridStrategy[type]
  return <Component {...props} />
}

CardGridFactory.defaultProps = {
  type: "default",
}

function DefaultCardGrid(props) {
  return <div sx={{ variant: "cards.grid.default" }}>{props.children}</div>
}

function HorizontalCardGrid(props) {
  return <div sx={{ variant: "cards.grid.horizontal" }}>{props.children}</div>
}

function ListItemCardGrid(props) {
  return <div sx={{ variant: "cards.grid.horizontal" }}>{props.children}</div>
}
