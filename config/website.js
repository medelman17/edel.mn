require("dotenv").config({ path: ".env" })
const { nordLight } = require("../theme")

const SITE_ANALYTICS_GOOGLE = "UA-150995153-1"
const SITE_AUTHOR = "Michael Edelman"
const SITE_AUTHOR_EMAIL = "michael@fabulas.io"
const SITE_AUTHOR_FACEBOOK = ""
const SITE_AUTHOR_GITHUB = "medelman17"
const SITE_AUTHOR_TWITTER = "edelman215"
const SITE_AUTHOR_WEBMENTION = ""
const SITE_BANNER = ""
const SITE_COLOR_BACKGROUND = nordLight.background
const SITE_COLOR_THEME = nordLight.accent
const SITE_DOMAIN = "edel.mn"
const SITE_FAVICON = "static/icons/favicon.png"
const SITE_DESCRIPTION = "Personal Website and Blog of Michael Edelman"
const SITE_OG_LANG = "en-us"
const SITE_PATH_PREFIX = ""
const SITE_PRISMIC_ACCESS_TOKEN = process.env.PRISMIC_ACCESS_TOKEN
const SITE_PRISMIC_PREVIEW_ENABLED = false
const SITE_PRISMIC_PREVIEW_PATH = "/preview"
const SITE_PRISMIC_REPOSITORY = "edelmn"
const SITE_SHORT_NAME = "Edelman"
const SITE_SITEMAP = "https://edel.mn/sitemap.xml"
const SITE_SKIP_NAV_ID = "reach-skip-nav"
const SITE_TITLE = "Michael Edelman"
const SITE_URL = "https://edel.mn"

exports.schemaOrg = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  author: {
    "@type": "Person",
    name: SITE_AUTHOR,
  },
  url: SITE_URL,
  mainEntityOfPage: SITE_URL,
  headline: SITE_DESCRIPTION,
  description: SITE_DESCRIPTION,
  name: SITE_TITLE,
  inLanguage: SITE_OG_LANG,
  copyrightYear: "2020",
  copyrightHolder: {
    "@type": "Person",
    name: SITE_AUTHOR,
  },
}

exports.website = {
  author: SITE_AUTHOR,
  backgroundColor: SITE_COLOR_BACKGROUND,
  banner: SITE_BANNER,
  description: SITE_DESCRIPTION,
  domain: SITE_DOMAIN,
  email: SITE_AUTHOR_EMAIL,
  facebook: SITE_AUTHOR_FACEBOOK,
  favicon: SITE_FAVICON,
  github: SITE_AUTHOR_GITHUB,
  google: SITE_ANALYTICS_GOOGLE,
  ogLanguage: SITE_OG_LANG,
  pathPrefix: SITE_PATH_PREFIX,
  prismicAccessToken: SITE_PRISMIC_ACCESS_TOKEN,
  prismicPreviewEnabled: SITE_PRISMIC_PREVIEW_ENABLED,
  prismicPreviewPath: SITE_PRISMIC_PREVIEW_PATH,
  prismicRepo: SITE_PRISMIC_REPOSITORY,
  schemaOrg,
  shortName: SITE_SHORT_NAME,
  siteUrl: SITE_URL,
  sitemap: SITE_SITEMAP,
  skipNavId: SITE_SKIP_NAV_ID,
  themeColor: SITE_COLOR_THEME,
  title: SITE_TITLE,
  twitter: SITE_AUTHOR_TWITTER,
  webmention: SITE_AUTHOR_WEBMENTION,
}
