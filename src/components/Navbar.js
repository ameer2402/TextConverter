import React from 'react';
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mx-1 my-1`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Textutils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-5">
                <a
                className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-5">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
          <input
            className="form-check-input "
            onClick={props.togglemode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.text}
          </label>
        </div>
      </nav>
    </div>
  );
}
