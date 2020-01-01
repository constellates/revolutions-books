import React from "react"

const NavBar = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand is-size-3 is-capitalized has-text-weight-semibold">
      <a className="navbar-item" href="https://revolutionsbookshop.com">
        Revolutions Bookshop
      </a>

      {/* <a role="button" className="navbar-burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> */}
    </div>

      <div className="navbar-end is-size-4 is-hidden-mobile">
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

      {/* <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-item">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div> */}

  </nav>
)

export default NavBar
