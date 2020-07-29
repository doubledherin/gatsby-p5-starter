import PropTypes from 'prop-types'

const Layout = ({ title, children }) => {
  return (
    <div className="layout-container">
      <SEO title={title} />
      <Header />
      <div className="page-container">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
