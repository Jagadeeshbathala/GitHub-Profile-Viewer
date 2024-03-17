
import React from 'react';
import { Pagination } from 'react-bootstrap';

function CustomPagination({ reposPerPage, totalRepos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
<div style={{ margin: "2rem", gap: "1rem" }}>
        <Pagination>
        {pageNumbers.map((number) => (
            <Pagination.Item key={number} onClick={() => paginate(number)}>
            {number}
            </Pagination.Item>
        ))}
        </Pagination>
    </div>
  );
}

export default CustomPagination;



