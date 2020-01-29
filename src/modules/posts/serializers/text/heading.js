/** @jsx jsx */
import { jsx } from "theme-ui"
import { Heading } from "@theme-ui/components"

function getHeadingType(type) {
  switch (type) {
    case "heading2":
      return "h2"
    case "heading3":
      return "h3"
    default:
      return "h1"
  }
}

export function handlePrismicHeading(type, element, content, children, index) {
  const as = getHeadingType(type)
  return (
    <Heading as={as} sx={{ variant: `styles.${as}` }}>
      {children}
    </Heading>
  )
}
