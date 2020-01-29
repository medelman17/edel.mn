/** @jsx jsx */
import { jsx } from "theme-ui"

export function getCodeSerializer(label) {
  switch (label) {
    case "jsx":
      return jsxSerializer
    default:
      return codeSerializer
  }
}

function jsxSerializer(type, element, content, children, index) {
  return (
    <div>
      <pre
        className="show-language language-jsx"
        sx={{ p: 2, borderRadius: "5px", fontSize: "12px" }}
      >
        <code className="language-jsx">{element.text}</code>
      </pre>
    </div>
  )
}

function codeSerializer(type, element, content, children, index) {
  // console.log(type, element, content)
  return null
}
