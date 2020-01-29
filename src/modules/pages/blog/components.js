import React from "react"

import { linkResolver } from "../../../utils"
import {
  CardGridFactory,
  CardFactory,
  ImageFactory,
  Link,
} from "../../../components"
import { Card } from "../../../components/card/index"
import Slider from "../../../components/slider"
import { css } from "@emotion/core"
import { useSprings, a } from "react-spring"
import { useSwipeable, Swipeable } from "react-swipeable"

export function BlogPostList(props) {
  function gfys(e) {
    console.log(e)
  }
  const handlers = useSwipeable({
    onSwiped: eventData => gfys(eventData),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <div {...handlers}>
      <CardGridFactory type="listItem">
        {props.posts.map(({ node }) => (
          <BlogPostListItem key={node._meta.id} {...node} />
        ))}
      </CardGridFactory>
    </div>
  )
}

// export function BlogPostList(props) {
//   return (
//     <Slider items={props.posts} visible={2} width={700} type="postList">
//       {({ node }) => {
//         console.log(node)
//         return (
//           <a.div
//             style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
//           >
//             {/* {JSON.stringify(node, null, 4)} */}
//           </a.div>
//         )
//       }}
//       {/* {props.posts.map(({ node }) => (
//         //
//       ))} */}
//     </Slider>
//   )
// }

// {props => {
//   console.log("props", props)
//   return a(
//     <BlogPostListItem
//       sx={{ width: "100%", height: "100%" }}
//       key={node._meta.id}
//       {...node}
//       {...props}
//     />
//   )
// }}

BlogPostList.defaultProps = {
  cardGridType: "default",
}

export function BlogPostListItem(props) {
  // console.log("list item props", props)
  const {
    title,
    blurb,
    _meta,
    _meta: { uid, id },
    author,
    main_imageSharp,
    main_image: { alt },
  } = props
  const [{ text }] = title

  const { childImageSharp: fluid } = main_imageSharp
  const data = {
    _meta,
    title: text,
    blurb,
    author,
    image: { ...fluid, alt },
    uid,
    id,
  }
  return <Card type="list-item" data={data} bg="surface" el={2} />
}

// export function BlogPostListItem(props) {
//   const [title] = props.title
//   return (
//     <CardFactory type="default" variant="list-item" asPaper={true}>
//       <ImageFactory image={props.main_imageSharp.childImageSharp.fluid} />
//       <div sx={{ variant: "cards.card.body" }}>
//         <Link
//           to={linkResolver(props._meta)}
//           sx={{ variant: "links.list-item" }}
//         >
//           {title.text}
//         </Link>
//         <p sx={{ variant: "text.paragraph" }}>{props.blurb}</p>
//       </div>
//     </CardFactory>
//   )
// }
