/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const ImageStrategy = {
  default: FluidImage,
  avatar: AvatarImage,
}

export function ImageFactory({ type, ...props }) {
  // console.log("img type ", props)
  const Component = ImageStrategy[type]
  return <Component {...props} />
}

ImageFactory.defaultProps = {
  type: "default",
}

function FluidImage(props) {
  const { variant, image } = props
  // console.log("image variant", props)
  return <Img sx={{ variant: variant || "image.fluid" }} fluid={image} />
}

function AvatarImage(props) {
  // console.log("ava props", props)
  const { image } = props
  const { alt, copyright } = image
  const fixed = {
    // width: props.image.dimensions.width,
    // height: props.image.dimensions.height,
    src: props.image.url,
  }
  return <Img sx={{ variant: "image.avatar" }} fixed={fixed} alt={alt} />
}
