import React from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

import debounce from 'lodash.debounce';

const Pagination = ({ page, perPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get('page')) || 1;
  const currentPerPage = Number(queryParams.get('per_page')) || 10;

  const updateQueryParams = debounce((newPage, newPerPage) => {
    const newParams = new URLSearchParams(location.search);
    newParams.set('page', newPage);
    newParams.set('per_page', newPerPage);
    navigate(`?${newParams.toString()}`);
  }, 500);

  const handlePageChange = (event) => {
    const newPage = event.target.value;
    updateQueryParams(newPage, currentPerPage);
  };

  const handlePerPageChange = (event) => {
    const newPerPage = event.target.value;
    updateQueryParams(currentPage, newPerPage);
  };

  return (
    <div>
      <label>Page:</label>
      <input type="number" value={page} onChange={handlePageChange} />
      <label>Per page:</label>
      <select value={perPage} onChange={handlePerPageChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Pagination;