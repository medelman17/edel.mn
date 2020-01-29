/** @jsx jsx */
import { jsx } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { NavLink } from "./link"

export function HeaderNavigation({ variant, pages, location }) {
  let pathname = ""

  if (location) {
    pathname = location.pathname
  }

  const navLinks = getHeaderNavLinks({ pages, pathname })

  return <Flex sx={{ variant }}>{navLinks}</Flex>
}

function getHeaderNavLinks({ pages, pathname }) {
  return pages.map(({ node }) => {
    const [title] = node.title
    const { uid } = node._meta
    const isActive = `/${uid}` === pathname

    return isActive ? (
      <span
        key={uid}
        sx={{
          variant: "links.navigation",
          color: "link.active",
          textDecoration: "underline",
          textDecorationColor: "link.active",
        }}
      >
        {" "}
        {title.text}
      </span>
    ) : (
      <NavLink key={uid} to={`/${uid}`}>
        {title.text}
      </NavLink>
    )
  })
}

HeaderNavigation.defaultProps = {
  variant: "layout.header.navigation",
}
