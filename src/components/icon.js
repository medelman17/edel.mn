/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import { MdEmail } from "react-icons/md"
const simpleIcons = require("simple-icons")

const socialIconSize = {
  width: "1.5rem",
  marginRight: ".5rem",
}

const theme = existingTheme => {
  return {
    ...existingTheme,
    icon: {
      email: {
        ...socialIconSize,

        color: "text",
      },
      social: {
        upwork: {
          svg: {
            ...socialIconSize,
          },
          path: {
            fill: "rgb(55,160,0)",
          },
        },
        linkedin: {
          svg: {
            ...socialIconSize,
          },
          path: {
            fill: "#0072b1",
          },
        },
        github: {
          svg: {
            width: "1.5rem",
            marginRight: ".5rem",
          },
          path: {
            fill: "text",
          },
        },
        twitter: {
          svg: {
            width: "1.5rem",
            marginRight: ".5rem",
          },
          path: {
            fill: "rgb(0, 172, 237)",
          },
        },
      },
    },
  }
}

const IconStrategy = {
  social: SocialIcon,
  email: EmailIcon,
}

const IconFactory = {
  create(type) {
    const strategies = Object.keys(this.strategy)
    if (!type || !strategies.includes(type)) {
      return this.default
    }
    return this.strategy[type]
  },
  strategy: IconStrategy,
  default: DefaultComponent,
}

export function Icon({ type, ...props }) {
  const Component = IconFactory.create(type)
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}

function EmailIcon(props) {
  const { email, size } = props

  return (
    <a href={`mailto:${email}`} alt="author's email address">
      <MdEmail sx={{ variant: `icon.email` }} size={size} />
    </a>
  )
}

EmailIcon.defaultProps = {
  size: "1.5rem",
}

function SocialIcon(props) {
  // console.log("social icon props", props)
  const {
    profile_url: { url },
    social_type,
    username,
  } = props
  const icon = simpleIcons.get(social_type)
  // console.log(icon)
  return (
    <a
      href={url}
      alt={`Link to ${username}'s ${icon.slug} profile`}
      target="blank"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ variant: `icon.social.${icon.slug}.svg` }}
      >
        <path d={icon.path} sx={{ variant: `icon.social.${icon.slug}.path` }} />
      </svg>
    </a>
  )
}

function DefaultComponent(props) {
  console.warn(
    "[ICON FACTORY]: You forgot to supply an icon type or the type supplied is not supported."
  )
  return <div>{props.children}</div>
}
