import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import '../../../styleguide.css';

const GoogleFormPage = () => {
  return (
    <div className="google-form-page container-fluid">

      <nav className="navbar navbar-expand-lg navbar-3">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/search-page">
                  Datasets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-page">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userguide-page">
                  User Guide & Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/google-form">
                  Submit a Dataset
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img className="logo" alt="Logo" src="/img/logo.png" />

      {/* Embedded Google Form */}
      <div className="form-container dropdown-box items-frame">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScp89LhjoM7v7ONLhZR_5NpbG6VGRPrDSuIEUHeKLdywWdilg/viewform?embedded=true"
          className="embedded-form"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleFormPage;


