/** @jsx jsx */
import { jsx } from "theme-ui"

import { Image } from "../image/index"
import { Link } from "../link"
import { linkResolver } from "../../utils"
import { transparentize } from "polished"

export function ListItemCard({ bg, el, children, data, ...props }) {
  return (
    <div key={data.id} sx={{ variant: "cards.listItem", bg }}>
      <ListItemHeader {...data} />
      <div sx={{ px: 2, py: 2 }}>
        <p
          sx={{
            marginTop: 2,
            lineHeight: 1.25,
          }}
        >
          {data.blurb}
        </p>
      </div>
      <div sx={{ display: "flex", justifyContent: "flex-end", px: 3, py: 2 }}>
        {/* <Link to={linkResolver(data._meta)}>Read more</Link> */}
      </div>
    </div>
  )
}

function ListItemHeader({ title, _meta, image }) {
  return (
    <div sx={{ position: "relative" }}>
      <Image type="list-item" image={image} />
      <div
        sx={{
          position: "absolute",
          bottom: 0,
          paddingLeft: 2,
          py: 2,
          width: "100%",
          // borderTopLeftRadius: "8px",
          // borderTopRightRadius: "8px",
          // textAlign: "center",

          // boxShadow: 1,

          backgroundColor: theme =>
            `${transparentize(0.3, theme.colors.surface)}`,
          transition:
            "box-shadow 400ms ease-in-out 0s, background-color 400ms ease-in-out 0s;",
        }}
      >
        <h1
          sx={{
            fontSize: ["24px", "36px"],
            lineHeight: 1.1,
            // fontWeight: 400,
            letterSpacing: "-0.05rem",
          }}
        >
          <Link
            to={linkResolver(_meta)}
            sx={{
              textDecoration: "none",
              // textTransform: "uppercase",
              color: "text",

              transition:
                "box-shadow 400ms ease-in-out 0s, color 400ms ease-in-out 0s;",
            }}
          >
            {title}
          </Link>
        </h1>
      </div>
    </div>
  )
}

function ListItemBody({ title, blurb, _meta }) {
  return (
    <div sx={{ display: "flex", flexDirection: "column", px: 2, py: 2 }}></div>
  )
}
