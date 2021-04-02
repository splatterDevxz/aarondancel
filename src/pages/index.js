import React from "react"
import Layout from "components/layout"
import Banner from "components/banner"
import Main from "components/main"
import BlogFront from "components/blog-front"
import LowerMain from  "components/lower-main"
import Events from "components/events"
import Info from "components/question"


const IndexPage = () => (
  <Layout>
     <Banner/>
     <Main/>
     <BlogFront/>
     <LowerMain/>
     <Events/>
     <Info/>
  </Layout>
)

export default IndexPage