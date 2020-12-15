/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "components/footer"
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Layout = ({ children }) => {  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) 

  return (
    <>
      <div id="body-wrapper">
         <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
              
            <MessengerCustomerChat
                pageId="380107163215975"
                appId="106995420880939"
            />

          <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
