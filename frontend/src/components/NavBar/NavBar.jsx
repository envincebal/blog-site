import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import Button from "react-bootstrap/Button";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="nav-container container">
          <div className="navbar-header">
            <p className="navbar-brand">DAILY JOURNAL</p>
          </div>
          <div className="new-entry-container">
            <Link to={"/compose"}>
              <Button type="button" variant="secondary">
                + New Entry
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
