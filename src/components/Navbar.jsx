import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="navbar">
      <div className="navbar-no-shadow-container-2 w-nav">
        <div className="container-regular-2">
          <div className="navbar-wrapper-3">
            <a href="/" className="navbar-brand-2 w-nav-brand">
              <img
                src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png"
                loading="lazy"
                alt=""
                style={{ width: "60px", height: "auto" }}
              />
            </a>
            <nav role="navigation" className="nav-menu-wrapper-2 w-nav-menu">
              <ul role="list" className="nav-menu w-list-unstyled">
                <li><a href="/" className="nav-link-4">Home</a></li>
                <li><a href="/enhancer" className="nav-link-4">Note Enhancer</a></li>
                <li><a href="/quiz" className="nav-link-4">Quiz</a></li>
                <li><a href="/task" className="nav-link-4">Task</a></li>
                <li><a href="/grammer" className="nav-link-4">Grammar</a></li>
                <li className="mobile-margin-top-12">
                  <div className="nav-button-wrapper">
                    {isAuthenticated ? (
                      <button
                        className="button-primary-5 w-button"
                        onClick={() => logout({ returnTo: window.location.origin })}
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        className="button-primary-5 w-button"
                        onClick={() => loginWithRedirect()}
                      >
                        Register
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
            <div className="menu-button-3 w-nav-button">
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
