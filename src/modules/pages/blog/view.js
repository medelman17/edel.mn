/** @jsx jsx */
import { jsx } from "theme-ui"
import { BlogPostList } from "./components"

export function BlogPageView({ posts, page, site }) {
  const [title] = page.title || "No title"
  const [description] = page.description || { text: "No description" }
  return (
    <div sx={{ variant: "page.container" }}>
      <div
        sx={{
          variant: "page.hero",
          // maxWidth: [null, null, "66%"],
          paddingTop: ["1rem", "3rem"],
          paddingBottom: ["3rem", "5rem"],
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

      <div sx={{ variant: "page.body.default" }}>
        <BlogPostList posts={posts} />
      </div>
    </div>
  )
}
