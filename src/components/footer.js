/** @jsx jsx */
import { jsx } from "theme-ui"

export function Footer(props) {
  return (
    <div sx={{ minHeight: "10rem", variant: "layout.footer.outer" }}>
      <div sx={{ minHeight: "10rem", variant: "layout.footer.inner" }}></div>©{" "}
      {new Date().getFullYear()}
    </div>
  )
}

export default Footer
