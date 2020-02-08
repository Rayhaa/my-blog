import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="lg:flex">
        <div className="bg-white px-6 pb-4 shadow rounded">
          <h1>{post.frontmatter.title}</h1>
          <div className="-mt-6">
            <small>
              {post.timeToRead} {"min read ·"} {post.frontmatter.date}
            </small>
          </div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <div className="hidden lg:block bg-white shadow rounded ml-4 px-6 max-w-5xl h-full py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolore
          laboriosam cupiditate ducimus rerum itaque, neque voluptates non velit
          architecto, maxime esse voluptatibus ad modi repudiandae. Tempore
          quisquam eum fugiat!
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`
