import React, { Component } from "react"

class NavBar extends Component {
  state = {
    menuActive: false
  };

  toggleMenu = () => {
    this.setState({
      menuActive: !this.state.menuActive
    });
  }

  render() {

    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-size-3 is-capitalized has-text-weight-semibold">
          <a className="navbar-item" href="https://revolutionsbookshop.com">
            Revolutions Bookshop
          </a>
          <span className={`navbar-burger burger ${this.state.menuActive ? 'is-active' : ''}`} data-target="navMenu" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        {/* Mobile */}
        <div id="navMenu" className={`navbar-menu is-hidden-desktop ${this.state.menuActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item" href="#about" onClick={this.toggleMenu}>
              About
            </a>

            <a className="navbar-item" href="#contact" onClick={this.toggleMenu}>
              Contact
            </a>
          </div>
        </div>

        {/* Desktop */}
        <div className="navbar-end is-size-4 is-hidden-touch">
          <a className="navbar-item" href="#about">
            About
          </a>

          <a className="navbar-item" href="#contact">
            Contact
          </a>

        </div>

      </nav>
    );
  }
}

export default NavBar
