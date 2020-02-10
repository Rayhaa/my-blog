import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { DiscussionEmbed } from "disqus-react"

export default ({ data }) => {
  const post = data.mdx
  const slug = post.fields.slug
  const title = post.frontmatter.title
  const disqusConfig = {
    shortname: `codeinstant-1`,
    config: { identifier: slug, title },
  }
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="flex">
        <div className="max-w-full">
          <div className="bg-white px-6 pb-4 shadow rounded">
            <div className="pt-4 flex">
              <div className="h-16 w-16 rounded-full bg-gray-200 mr-4"></div>
              <div className="text-left">
                {post.frontmatter.title}
                </div>
            </div>

            <h1>{post.frontmatter.title}</h1>
            <div className="-mt-6">
              <small>
                {post.timeToRead} {"min read ·"} {post.frontmatter.date}
              </small>
            </div>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        <div className="bg-white rounded mt-4 p-6">
          <DiscussionEmbed {...disqusConfig} />
        </div>
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
      fields {
        slug
      }
      timeToRead
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`
