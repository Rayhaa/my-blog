import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <footer className="text-center p-6 border-t border-gray-200 w-full bottom-0">
      <div
        className={`mt-2 text-sm text-gray-600 pt-2 text-center tracking-widest`}
      >
        {" "}
        copyright & copy; {new Date().getFullYear()} -{" "}
        {data.site.siteMetadata.title}.All right reserved{" "}
      </div>{" "}
    </footer>
  )
}

export default Footer
