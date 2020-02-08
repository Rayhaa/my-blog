import React from "react"

import kebabCase from "loadsh/kebabCase"

import { Link } from "gatsby"
import Image from "gatsby-image"

const Post = ({ title, date, slug, fluid, body, tags }) => {
  return (
    <div className="mx-4 my-4 shadow bg-white rounded hover:shadow-md hover:-mt-2 max-w-md">
      <Image fluid={fluid} />
      <div className="px-6 py-4">
        <Link to={slug} className="no-underline text-black font-bold text-xl">
          {title}
        </Link>
        <div className="text-gray-800">
          <small>{date}</small>
        </div>
        <p className="mt-4 text-base text-gray-800 tracking-wide">
          {body}
          <Link className="no-underline" to={slug}>
            Continue reading
          </Link>
        </p>
      </div>
      <div className="px-6 py-4 -mt-4">
        {tags.map(tags => (
          <Link to={`/tags/${kebabCase(tags)}/`} key={tags}>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2 hover:font-bold hover:shadow">
              #{tags}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Post
