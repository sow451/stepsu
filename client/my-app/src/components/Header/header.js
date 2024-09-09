import React from 'react';
import './header.css'; // Import the CSS file for custom styles (optional)

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Stepsu</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
 );
 };

export default Header;