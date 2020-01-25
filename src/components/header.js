/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Flex, IconButton } from "@theme-ui/components"
import { HeaderNavigation } from "./nav"
import { NavLink } from "./link"

export function Header(props) {
  const noNav = props.width > 500 ? props.noNav : ["Hello", "Projects"]
  const pages = filterHeaderNavigationPages({ ...props, noNav })
  return (
    <Flex as="header" sx={{ variant: "layout.header.outer" }}>
      <div sx={{ variant: "layout.header.inner" }}>
        <NavLink to="/" variant="links.navigation">
          {props.siteTitle}
        </NavLink>
        <div sx={{ mx: "auto" }} />
        <HeaderNavigation pages={pages} />
        <ThemeToggler />
      </div>
    </Flex>
  )
}

function filterHeaderNavigationPages(props) {
  return props.pages.filter(({ node }) => {
    if (node.title === null) return false
    const [title] = node.title
    return !props.noNav.includes(title.text)
  })
}

Header.defaultProps = {
  noNav: ["Hello", "Projects"],
}

function ThemeToggler(props) {
  const [colorMode, setColorMode] = useColorMode("light")

  function handleThemeToggle(e) {
    e.preventDefault()
    setColorMode(colorMode === "light" ? "dark" : "light")
  }

  return (
    <IconButton aria-label="Toggle dark/light mode" onClick={handleThemeToggle}>
      {colorMode === "light" ? <LightToggleIcon /> : <DarkToggleIcon />}
    </IconButton>
  )
}

const LightToggleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    sx={{ color: "text", width: "1.125rem", height: "1.125rem" }}
    transform="translate(0, 0) translate(-12, -12) scale(1, 1) translate(12, 12) rotate(0, 12, 12) skewX(0) skewY(0) "
  >
    <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41zM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31zM12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"></path>
  </svg>
)

const DarkToggleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    transform="translate(0, 0) translate(-12.021049737930298, -12.021688222885132) scale(1, 1) translate(12.021049737930298, 12.021688222885132) rotate(0, 12.021049737930298, 12.021688222885132) skewX(0) skewY(0) "
    sx={{ color: "text", width: "1.125rem", height: "1.125rem" }}
  >
    <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"></path>
  </svg>
)
