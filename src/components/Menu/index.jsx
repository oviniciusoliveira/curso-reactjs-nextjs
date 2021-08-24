import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { pages } from '../../data/pages';

function index() {
  return (
    <React.Fragment>
      <div className="menu-container">
        <header className="header">
          {pages.map((page) => {
            return (
              <NavLink key={page.path} to={page.path} activeClassName="selected">
                {page.path.match(/[^/\n].*/)}
              </NavLink>
            );
          })}
        </header>
      </div>
    </React.Fragment>
  );
}

export default index;
