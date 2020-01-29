/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import { RichText } from "prismic-reactjs"
import { EmbedFactory, ImageFactory, CardFactory } from "../../components"
import { Card } from "../../components/card/index"
import { linkResolver } from "../../utils"
import { htmlSerializer, getCodeSerializer } from "./serializers"
import Prism from "prismjs"

import "./prism/prism.css"

function PostHeader(props) {
  const [{ text }] = props.post.title
  return (
    <div sx={{ variant: "layout.header" }}>
      <h1 sx={{ variant: "styles.h1" }}>{text}</h1>

      <ImageFactory
        image={props.post.main_imageSharp.childImageSharp.fluid}
        variant="image.main"
      />
    </div>
  )
}

export function PostView(props) {
  const {
    post,
    post: { author, body },
    width,
  } = props
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article
      id="article"
      sx={{ variant: "layout.container", marginBottom: "10rem" }}
    >
      <PostHeader post={post} width={width} />
      <div sx={{ variant: "layout.body" }}>{body.map(transformSlice)}</div>
      <div sx={{ variant: "layout.footer" }}>
        <Card type="author" el={2} data={author} bg="surface" />
      </div>
    </article>
  )
}

const sliceTransformStrategy = {
  text: ({ slice, index }) => (
    <RichText
      key={`s-${index}`}
      render={slice.primary.text}
      linkResolver={linkResolver}
      htmlSerializer={htmlSerializer}
    />
  ),
  code: ({ slice, index }) => (
    <RichText
      key={`s-${index}`}
      render={slice.primary.code}
      htmlSerializer={getCodeSerializer(slice.label)}
    />
  ),
  embed: ({ slice, index }) => {
    const {
      primary: { embed },
    } = slice
    return <EmbedFactory key={`s-${index}`} embed={embed} />
  },
  quote: () => {},
  default: () => {},
  image_with_caption: ({ slice, index }) => {
    return (
      <ImageFactory
        key={`s-${index}`}
        image={slice.primary.imageSharp.childImageSharp.fluid}
      />
    )
    // console.log("image slice,", slice)
  },
}

function transformSlice({ type, ...slice }, index) {
  return (
    <div sx={{ variant: "slice.divider" }}>
      {sliceTransformStrategy[type]({ slice, index })}
    </div>
  )
}
