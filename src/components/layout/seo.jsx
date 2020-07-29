/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = ({ title, description, meta, lang }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          settings {
            siteLanguage
            siteShortTitle
            siteShortDescription
          }
        }
      }
    }
  `)

  const metaLang = lang || site.siteMetadata.siteLanguage
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: metaLang }}
      title={metaTitle}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[{ rel: 'canonical', href: site.siteMetadata.siteUrl }]}
      meta={[
        // base meta tags
        { name: 'description', content: metaDescription },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  title: null,
  description: null,
  meta: [],
  lang: 'en',
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
}

export default SEO
