/** @jsx jsx */
import { jsx } from "theme-ui"
import { Global, css } from "@emotion/core"

export function GlobalCss(props) {
  return <Global styles={[cssReset, globalCss]} />
}

export const globalCss = css`
  @font-face {
    font-family: "JetBrains Mono";
    src: url("../../static/fonts/jbmono/JetBrainsMono-Regular.ttf")
      format("ttf");
  }

  :root {
    --vertical-rhythm: 3rem;
  }

  html {
    /* margin-left: calc(100vw - 100%);
    margin-right: 0; */
    font-size: 16px;
    line-height: 1.5;
  }
`

export const cssReset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  * {
    box-sizing: border-box;
  }

  /* html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  } */

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    color: inherit;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  ul,
  ol,
  pre,
  table,
  blockquote {
    margin-top: 0em;
    margin-bottom: 1.5em;
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-top: 0em;
    margin-bottom: 0em;
  }

  /* Let's make sure all's aligned */
  hr,
  .hr {
    border: 1px solid;
    margin: -1px 0;
  }
  a,
  b,
  i,
  strong,
  em,
  small,
  code {
    line-height: 0;
  }
  sub,
  sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
