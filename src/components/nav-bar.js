import React from "react"

const NavBar = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand is-size-3 is-capitalized has-text-weight-semibold">
      <a className="navbar-item" href="https://revolutionsbookshop.com">
        Revolutions Bookshop
      </a>
    </div>

      <div className="navbar-end is-size-4">
        <a className="navbar-item" href="#about">
          About
        </a>

        <a className="navbar-item" href="#hours">
          Hours
        </a>

        <a className="navbar-item" href="#contact">
          Contact
        </a>

      </div>

  </nav>
)

export default NavBar
