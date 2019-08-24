import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";


import LandingPage from './app/LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <HashRouter>
      <span className="root">
        <Navbar className="desktop-nav" color="light" light expand="md">
          <Link className="navbar-brand" to={{ pathname: '/' }}>WebTutor</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to={{ pathname: '/' }}>Topics</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to={{ pathname: '/' }}>About me</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="cover-image">
        </div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </span>
    </HashRouter>;
  }
}
export default App;