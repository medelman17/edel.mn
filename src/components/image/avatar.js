/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

export function Avatar(props) {
  const { image } = props
  const { alt } = image
  const fixed = {
    src: props.image.url,
  }
  return <Img sx={{ variant: "images.avatar" }} fixed={fixed} />
}
