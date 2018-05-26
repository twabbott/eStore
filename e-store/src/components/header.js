import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
/*
TODO:

I want the log to shrink down and re-size to fill the cell.  It's not doing that

figure out how to do a basic bootstrap nav-bar that collapses when you shrink the width
of the window.  Center it.

figure out how to do a search bar that is just an icon until you click it, then it
expands to become an edit-box with the prompt "search".

Add some font-awesome icons for search, account/sign-in, and the cart.  Align that stuff right.

*/
export default (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">
                        <img className="img-responsive" src="../img/spatula-city-logo.png" alt="logo" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link Right
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
}