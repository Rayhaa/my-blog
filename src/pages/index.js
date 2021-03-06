import React from "react"

import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const post = data.allMdx.edges
  const postPerPage = 2
  let numPages
  numPages = Math.ceil(data.allMdx.totalCount / postPerPage)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="lg:flex md:flex max-w-full">
        {post.map(({ node }) => (
          <Post
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            slug={node.fields.slug}
            fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            body={node.excerpt}
            tags={node.frontmatter.tags}
          />
        ))}
      </div>
      <Pagination currentPage={1} numPages={numPages} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 315) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
