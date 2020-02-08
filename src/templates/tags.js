import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div className="mx-6 lg:flex lg:justify-between">
        {/* <span className="text-2xl font-black">{tagHeader}</span> */}
        <span className="font-bold tracking-wide text-red-500 px-4 py-3 bg-white rounded">
          Home / tags / {tag}
        </span>
        <Link
          to="/tags"
          className="no-underline font-black px-4 py-3 bg-white text-red-500 shadow rounded-full hover:text-white hover:bg-red-500 hover:underline"
        >
          view all tags
        </Link>
      </div>
      <div className="lg:flex max-w-full">
        {edges.map(({ node }) => {
          return (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              slug={node.fields.slug}
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              body={node.excerpt}
              tags={node.frontmatter.tags}
            />
          )
        })}
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
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
        }
      }
    }
  }
`
