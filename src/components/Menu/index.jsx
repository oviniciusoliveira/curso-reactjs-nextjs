import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function index() {
  return (
    <React.Fragment>
      <div className="menu-container">
        <header className="header">
          <NavLink to="/useState" activeClassName="selected">
            UseState
          </NavLink>
          <NavLink to="/useEffect" activeClassName="selected">
            UseEffect
          </NavLink>
          <NavLink to="/useCallback" activeClassName="selected">
            UseCallback
          </NavLink>
        </header>
      </div>
    </React.Fragment>
  );
}

export default index;
