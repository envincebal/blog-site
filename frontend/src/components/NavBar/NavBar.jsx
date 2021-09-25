import React from "react";
import "./NavBar.css";

import Button from 'react-bootstrap/Button';
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="nav-container container">
          <div class="navbar-header">
            <p class="navbar-brand">DAILY JOURNAL</p>
          </div>
          <div class="new-entry-container">
            <a href="/compose" class="post-link">
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
