import React from "react"
import PropTypes from "prop-types"
import Nav from "components/navigation"
import {Helmet} from "react-helmet";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      position :'absolute',
      width: '100%',
      zIndex: '4'
    }}
  >   

  <Nav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
