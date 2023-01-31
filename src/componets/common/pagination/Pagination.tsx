import React from 'react'
import ReactPaginate from 'react-paginate';
import './_pagination.scss';
type IPaginationProps={
    pageCount:number,
    pageOffset:number,
    handlePageChange:(e:{
        selected: number;
    })=>void
}
const Pagination = ({pageCount,pageOffset,handlePageChange}:IPaginationProps) => {
  console.log("🚀 ~ file: Pagination.tsx:12 ~ Pagination ~ pageCount", pageCount)
  return (
    <ReactPaginate
          previousLabel={`${pageOffset!==0 ? "<" :""}`}
          nextLabel={`${(pageOffset < pageCount-1) ? ">" :""}`}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount === 0 ? 1 : pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(e: any) => handlePageChange(e)}
          containerClassName="pagination"
          activeClassName="link-active"
          forcePage={pageOffset}
        />
  )
}

export default Pagination