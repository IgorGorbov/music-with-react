import React, { Component, Fragment } from 'react';
import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
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
      isMounted: false,
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
    componentDidMount() {
        this.setState({ isMounted: true });
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }


  onClick() {
    if (this.state.isMounted) this.setState({ collapse: !this.state.collapse });
  }

  toggle() {
    if (this.state.isMounted) this.setState({ dropdownOpen: !this.state.dropdownOpen} );
  }

  handleChange(e) {
      const { search } = this.props;
      search(e.target.value);
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  render() {
    const  { user, userLogout } = this.props;
    return (
        <Navbar color="info-color" dark expand="md">
          <Link className="top-logo" to="/"><strong>Music with React</strong></Link>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <form className="search form-inline md-form mt-0" onSubmit={this.handleSubmit}>
                  <input
                    className="form-control search-input mr-sm-2 mb-0 text-white"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.handleChange}
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
                        src={user ? user.avatar : 'https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png'}
                        alt="avatar"
                        className="rounded-circle img-fluid img-thumbnail"
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                      {user ? <DropdownItem onClick={() => userLogout()}>Logout</DropdownItem>
                         :
                          <Fragment>
                            <DropdownItem><Link to="/user/login">Login</Link></DropdownItem>
                            <DropdownItem><Link to="/user/registration">Registration</Link></DropdownItem>
                          </Fragment>
                      }
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
