/** @jsx jsx */
import { jsx } from "theme-ui"

import { FormFactory } from "../../../components"

export function ContactPageView({ page }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  console.log(page)
  return (
    <div sx={{ variant: "page.container" }}>
      <div sx={{ variant: "page.hero" }}>
        <h1 sx={{ variant: "page.heading.one" }}>{title.text}</h1>
        <p sx={{ variant: "page.description" }}>{description.text}</p>
      </div>

      <div sx={{ variant: "page.body" }}>
        {renderPageBodyComponents(page.body)}
      </div>
    </div>
  )
}

const PageBodyStrategy = {
  form: FormFactory,
}

function renderPageBodyComponents(body) {
  const strategies = Object.keys(PageBodyStrategy)
  return body.map(node => {
    return strategies.includes(node.type)
      ? PageBodyStrategy[node.type](node)
      : null
  })
}
