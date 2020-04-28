const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/karenberba/Desktop/osu-hackathon-club-site/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/karenberba/Desktop/osu-hackathon-club-site/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/karenberba/Desktop/osu-hackathon-club-site/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/karenberba/Desktop/osu-hackathon-club-site/src/pages/index.js"))),
  "component---src-pages-membership-js": hot(preferDefault(require("/Users/karenberba/Desktop/osu-hackathon-club-site/src/pages/membership.js"))),
  "component---src-pages-resources-js": hot(preferDefault(require("/Users/karenberba/Desktop/osu-hackathon-club-site/src/pages/resources.js")))
}

