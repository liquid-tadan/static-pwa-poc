import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="ShopIT" />
        <div class="gatsby-remark-responsive-iframe">
        <iframe src="https://shopit-uat.atlascopco.com/en-us/AssemblyToolsandSolutions-catassembly_tools_and_solutions" 
        width="100%" 
        height="900">
        </iframe>  
        </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
