import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import Post from "../components/post"

const PostList = ({ pageContext, data }) => {
  const post = data.allMdx.edges
  const { currentPage, numPages } = pageContext
  return (
    <Layout>
      <div className="flex">
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

      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  )
}

export default PostList

export const PostListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            description
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
          excerpt
        }
      }
    }
  }
`
