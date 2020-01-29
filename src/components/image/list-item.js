/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

export function ListItemImage(props) {
  const { fluid, alt } = props.image

  return <Img sx={{ variant: "images.list-item" }} fluid={fluid} alt={alt} />
}
