import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

class PaginationCustom extends Component {
  constructor(props) {
    super(props);
    const {pageCount} = this.props;
    this.range = [];

    for (let i = 1; i <= pageCount; i++){
      this.range.push(i);
    }
  }
  render() {
    const { currentPage, setPage } = this.props
    return (
      <nav className="" aria-label="pagination">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" aria-label="Previous"><span aria-hidden="true">‹</span><span
              className="sr-only">Previous</span></button>
          </li>
          {
            this.range.map(page => {
              const onClick = e => {
                setPage(page);
              }
              return (
                <li key={page} className={classNames("page-item", {active: currentPage === page})}>
                  <NavLink to={`/articles/${page}`} className="page-link" onClick={onClick}>
                    {page}
                  </NavLink>
                </li>
              )
            })
          }
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
