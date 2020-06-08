import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class PaginationCustom extends Component {
  render() {
    return (
      <nav className="" aria-label="pagination">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" aria-label="Previous"><span aria-hidden="true">‹</span><span
              className="sr-only">Previous</span></button>
          </li>
          <li className="page-item active">
            <NavLink to={`/articles/1`} className="page-link">
              1
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink to={`/articles/2`} className="page-link">
              2
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink to={`/articles/3`} className="page-link">
              3
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink to={`/articles/4`} className="page-link">
              4
            </NavLink>
          </li>
          <li className="page-item">
            <button className="page-link" aria-label="Next"><span aria-hidden="true">›</span><span
              className="sr-only">Next</span></button>
          </li>
        </ul>
      </nav>
    );
  }
}
export default PaginationCustom;
