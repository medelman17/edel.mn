/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import { RichText } from "prismic-reactjs"
import { EmbedFactory, ImageFactory } from "../../components"
import { linkResolver } from "../../utils"
import { htmlSerializer, getCodeSerializer } from "./serializers"
import Prism from "prismjs"
import useDimensions from "react-use-dimensions"

import "./prism/prism.css"

export function PostView(props) {
  const [ref, { width }] = useDimensions({ liveMeasure: false })
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const body = props.post.body.map(transformSlice)

  return (
    <article ref={ref}>
      <div
        sx={{ variant: width > 500 ? "page.body.paper" : "page.body.mobile" }}
      >
        <ImageFactory
          image={props.post.main_imageSharp.childImageSharp.fluid}
        />
      </div>
      <div>
        <h1
          sx={{
            variant: "text.h1",
            marginTop: 4,
            // marginLeft: [0, 2],
            // fontSize: "36px",
            // lineHeight: "48px",
          }}
        >
          {props.post.title[0].text}
        </h1>

        <div
          sx={{
            variant: width > 500 ? "page.body.default" : "",
          }}
        >
          <p sx={{ fontWeight: 500, fontSize: "14px", my: 1 }}>
            <i>Michael Edelman</i>
          </p>
          {body}
        </div>
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
    console.log("image slice,", slice)
  },
}

function transformSlice({ type, ...slice }, index) {
  // console.log(type)

  return (
    <div sx={{ variant: "slice.divider", my: 3 }}>
      {sliceTransformStrategy[type]({ slice, index })}
    </div>
  )
}
