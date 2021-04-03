module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'b4e78eac0aea4c6d90dc8da036598b68',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Tirth Patel',
  domain: 'tirthpatel.vercel.app',
  author: 'Tirth Patel',

  // open graph metadata (optional)
  description: 'Tirth Patel - Computer Vision, Machine Learning and Data Science Enthusiasts',
  socialImageTitle: 'Tirth Patel',
  socialImageSubtitle: 'Hello World! 👋',

  // Search Google Console Config
  googlesiteverification: '3sWcelbEzzJjzXQqfBbCggZ0SoYX8As1COb0maMhg3w',

  // social usernames (optional)
  twitter: 'Tirth_P27',
  github: 'Tirth27',
  linkedin: 'tirth27',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
