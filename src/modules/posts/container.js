/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import { PostView } from "./view"
import { createModuleTheme } from "./theme"

export function PostContainer(props) {
  const { width } = props
  const createTheme = createModuleTheme({ isMobile: width < 500 })
  return (
    <ThemeProvider theme={createTheme}>
      <PostView {...props} />
    </ThemeProvider>
  )
}
