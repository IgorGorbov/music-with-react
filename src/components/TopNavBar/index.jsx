import React, { Component } from 'react';
import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'mdbreact';
import { Link } from 'react-router-dom';

import './style.css';

class TopNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


  onClick() {
    if (this._isMounted)this.setState({collapse: !this.state.collapse});
  }

  toggle() {
    if (this._isMounted) this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  render() {
    return (
        <Navbar color="info-color" dark expand="md" scrolling>
          <Link className="top-logo" to="/"><strong>Music with React</strong></Link>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/user/login">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Pricing</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <form className="form-inline md-form mt-0">
                  <input
                    className="form-control mr-sm-2 mb-0 text-white"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </NavItem>
              <NavItem>
                <Dropdown
                  className="user-avatar"
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                >
                  <DropdownToggle nav className="d-flex justify-content-end">
                    <div className="avatar text-center">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                        alt="avatar"
                        className="rounded-circle img-fluid img-thumbnail"
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another Action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
    );
  }
}

export default TopNavBar;
