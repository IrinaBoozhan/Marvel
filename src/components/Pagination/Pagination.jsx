import React from 'react';
import './Pagination.css';



const Pagination = ({ postsPerPage, totalPosts, paginate, offset }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }






  return (
    <nav className='pagination'>
      <ul>
        {pageNumbers.map(number => (
          <li key={number} className='paginationItem'>
            <button onClick={() => paginate(number)}>{number * 20 + offset}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;


