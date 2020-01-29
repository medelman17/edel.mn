/** @jsx jsx */
import { jsx } from "theme-ui"

export function AboutPageView({ props, page }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container", px: [2, 0] }}>
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

      <div sx={{ variant: "page.body" }}>
        {/* <BlogPostList posts={posts} /> */}
      </div>
    </div>
  )
}
