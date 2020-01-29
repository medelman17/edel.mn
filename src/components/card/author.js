/** @jsx jsx */
import { jsx } from "theme-ui"
import { Image } from "../image/index"
import { Icon } from "../icon"
import { Link } from "../link"

const ulSX = {
  listStyle: "none",

  "& li::before": { content: "' '" },
}
const ulHorizontalSX = {
  "& > li": {
    display: "inline-block",
    zoom: 1,
  },
}

export function AuthorCard({ bg, el, children, data, ...props }) {
  const { pic, name, location, social, email, short_bio } = data
  return (
    <div sx={{ variant: "cards.author", bg, shadows: el }}>
      <div sx={{ display: "flex", alignItems: "center" }}>
        <AuthorAvatar data={{ image: pic }} />
        <div
          sx={{
            marginLeft: [3, 3],
          }}
        >
          <AuthorBio data={{ name, location }} />
          <div sx={{ height: "5px" }}></div>
          <AuthorLinks data={{ social, email }} />
        </div>
      </div>
      <div sx={{ display: "flex", marginTop: 2 }}>
        <p sx={{ fontStyle: "italic" }}>
          {short_bio} <Link to="/about"> Learn more</Link> about{" "}
          {name.split(" ")[0]} or <Link to="/contact">get in touch</Link> with
          any quesitons.
        </p>
        <p sx={{ fontStyle: "italic" }}></p>
      </div>
    </div>
  )
}

function AuthorAvatar(props) {
  const { data } = props
  return <Image type="avatar" image={data.image} />
}

function AuthorBio(props) {
  const {
    data: { name, location },
  } = props
  return (
    <ul sx={ulSX}>
      <li sx={{ fontSize: "1.5rem" }}>{name}</li>
      <li sx={{ fontSize: "1rem" }}>{location}</li>
    </ul>
  )
}

function AuthorLinks(props) {
  const {
    data: { social, email },
  } = props
  return (
    <ul sx={{ ...ulSX, ...ulHorizontalSX, paddingTop: "10px" }}>
      <li>
        <Icon type="email" email={email} />
      </li>
      {social &&
        social.map(item => {
          return (
            <li key={item.social_type}>
              <Icon type="social" {...item} />
            </li>
          )
        })}
    </ul>
  )
}
