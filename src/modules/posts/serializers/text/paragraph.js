/** @jsx jsx */
import { jsx } from "theme-ui"

export function handlePrismicParagraph(
  type,
  element,
  content,
  children,
  index
) {
  return <p sx={{ variant: "styles.p" }}>{children}</p>
}
