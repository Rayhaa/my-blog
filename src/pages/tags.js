import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <div className="container mx-auto mb-8">
      <div className="-mt-10">
        <h1>Tags</h1>
      </div>
      <div className="flex">
        {group.map(tag => (
          <div key={tag.fieldValue}>
            <div className="px-3 py-2 bg-white mr-2 rounded-full shadow hover:font-bold">
              <Link
                className="no-underline text-black"
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                <span className="">{tag.fieldValue}</span>{" "}
                <span className="-mr-2 bg-red-500 text-white px-3 py-2 rounded-full ">
                  {tag.totalCount}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
