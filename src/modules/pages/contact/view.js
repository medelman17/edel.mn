/** @jsx jsx */
import { jsx } from "theme-ui"
import { FormFactory } from "../../../components/form"

export function ContactPageView({ page }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container", px: [2, 0], maxWidth: "800px" }}>
      <div
        sx={{
          variant: "page.hero",
          paddingTop: ["1rem", "3rem"],
          paddingBottom: ["3rem", "5rem"],
          maxWidth: [null, null, "66%"],
        }}
      >
        <h1 sx={{ variant: "page.heading.one", fontSize: "64px" }}>
          {title.text}
        </h1>
        <p
          sx={{
            variant: "page.description",
            fontSize: "24px",
            lineHeight: "30px",
          }}
        >
          {description.text}
        </p>
      </div>
      <div
        sx={{
          variant: "page.body",
        }}
      >
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
