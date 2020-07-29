module.exports = {
  siteAuthor: '',
  siteTitle: '',
  siteShortTitle: '',
  siteDescription: '',
  siteShortDescription: '',
  siteKeywords: 'comma, separated, list', // Replace this with your SEO keywords
  siteUrl: 'https://your-username.github.io',
  pathPrefix: '',
  siteLanguage: 'en',
  get copyright() {
    return `Copyright \u00A9 ${new Date().getFullYear()} ${this.siteAuthor}`
  }, // Returns copyright string with year of last build
}
