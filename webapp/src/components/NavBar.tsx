import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <header className="NavBar">
      <div className="NavBar__inner">
        <NavLink className="NavBar__brand" to="/">
          <img
            className="NavBar__logo"
            src="/samosa.svg"
            alt="Samosa logo"
            aria-hidden="false"
          />
          Samosa
        </NavLink>

        <nav className="NavBar__links" aria-label="Primary">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "NavBar__link NavBar__link--active" : "NavBar__link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) =>
              isActive ? "NavBar__link NavBar__link--active" : "NavBar__link"
            }
          >
            Docs
          </NavLink>
          <NavLink
            to="/setup"
            className={({ isActive }) =>
              isActive ? "NavBar__link NavBar__link--active" : "NavBar__link"
            }
          >
            Setup
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
