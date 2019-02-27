import React, { Component } from "react";

import {
  Container,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink
} from "reactstrap";

export class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar color="dark" expand="sm">
          <Container>
            <NavbarBrand href="/">Stomato</NavbarBrand>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink href="/compoents/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
        <Container className="p-2">
          <div style={styles.mainBody}>{children}</div>
        </Container>
        <div style={styles.footer} className="bg-dark">
          <Container>The End</Container>
        </div>
      </div>
    );
  }
}

const styles = {
  mainBody: {
    height: "100vh"
  },
  footer: {
    height: 100
  }
};
