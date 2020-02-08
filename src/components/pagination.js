import React from "react"
import { Link } from "gatsby"

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : "/page/" + (currentPage - 1).toString()
  const nextPage = "/page/" + (currentPage + 1).toString()
  return (
    <div className="flex justify-center mt-6">
      {isFirst ? (
        <span
          disable="true"
          rel="prev"
          className="no-underline text-red-500 px-4 py-2 bg-white rounded-full mx-2 font-black"
        >
          &laquo;
        </span>
      ) : (
        <Link
          to={prevPage}
          rel="prev"
          className="no-underline text-red-500 px-4 py-2 bg-white rounded-full mx-2 hover:bg-red-500 hover:text-white font-black"
        >
          &laquo;
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) =>
        currentPage === i + 1 ? (
          <Link
            to={`/${i === 0 ? "" : "page/" + (i + 1)}`}
            key={`page-number${i + 1}`}
            className="no-underline px-4 py-2 bg-white rounded-full mx-1 font-black bg-red-500 text-white"
          >
            {i + 1}
          </Link>
        ) : (
          <Link
            to={`/${i === 0 ? "" : "page/" + (i + 1)}`}
            key={`page-number${i + 1}`}
            className="no-underline text-red-500 px-4 py-2 bg-white rounded-full mx-1 font-black hover:bg-red-500 hover:text-white"
          >
            {i + 1}
          </Link>
        )
      )}

      {isLast ? (
        <span
          disable="true"
          rel="next"
          className="no-underline text-red-500 px-4 py-2 bg-white rounded-full mx-2 font-black "
        >
          &raquo;
        </span>
      ) : (
        <Link
          to={nextPage}
          rel="next"
          className="no-underline text-red-500 px-4 py-2 bg-white rounded-full mx-2 hover:bg-red-500 hover:text-white font-black"
        >
          &raquo;
        </Link>
      )}
    </div>
  )
}

export default Pagination
