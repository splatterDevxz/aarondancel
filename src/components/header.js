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

  <Helmet>
  	<script src="https://www.buzzsprout.com/1493704/6414094-the-virtualpreneur-with-ruben-licera.js?container_id=buzzsprout-player-6414094&player=small" type="text/javascript" charset="utf-8"></script>
  </Helmet>

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
