import React from "react"
import Layout from "components/layout"
import Banner from "components/banner"
import Main from "components/main"
import BlogFront from "components/blog-front"
import LowerMain from  "components/lower-main"
import Podcast from  "containers/wavesurfer"
import Events from "components/events"
import Info from "components/question"
import Footer from "components/footer"

const IndexPage = () => (
  <Layout>
     <Banner/>
     <Main/>
     <BlogFront/>
     <LowerMain/>
     <Podcast/>
     <Events/>
     <Info/>
  </Layout>
)

export default IndexPage