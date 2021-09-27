import React from "react";
import "./NavBar.css";

import Button from 'react-bootstrap/Button';
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-container container">
          <div className="navbar-header">
            <p className="navbar-brand">DAILY JOURNAL</p>
          </div>
          <div className="new-entry-container">
            <a href="/compose" className="post-link">
              <Button type="button" variant="secondary">
                + New Entry
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
