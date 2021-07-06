import React from "react";
const Pagination = ({
  countriesPerPage,
  totalCountries,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button onClick={prevPage} className="page-link">
            <i className="fa fa-angle-left">Prev</i>
          </button>
        </li>
        {pageNumbers.map((num) => {
          return (
            <li key={num} className="page-item">
              <button onClick={() => paginate(num)} className="page-link" href="#">
                  {num}
                </button>
            </li>
          );
        })}
        <li className="page-item">
          <button onClick={nextPage} className="page-link" href="#">
            <i className="fa fa-angle-right">Next</i>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
