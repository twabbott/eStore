import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, Glyphicon } from 'react-bootstrap';
import { Link } from "react-router-dom";

import "./Header.css";
/*
TODO:

I want the log to shrink down and re-size to fill the cell.  It's not doing that

figure out how to do a basic bootstrap nav-bar that collapses when you shrink the width
of the window.  Center it.

figure out how to do a search bar that is just an icon until you click it, then it
expands to become an edit-box with the prompt "search".

Add some font-awesome icons for search, account/sign-in, and the cart.  Align that stuff right.

*/ 
export default (props) => (
    <div>
        <div className="container-fluid header">
            <Col sm={3}>
                <Link to="/"><img className="img" src="../img/spatula-city-logo.png" alt="logo" /></Link>
            </Col>
            <Col sm={9}>
                <div className="right-area">
                    <div className="motto">
                        "We do spatulas, and that's all!"
                    </div>
                    <div className="phone-number">
                        (888)-SPA-TULA
                    </div>
                </div>
            </Col>
        </div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/">
                        Pancake Turners
                    </NavItem>
                    <NavItem eventKey={2} href="/">
                        Bowl Scrapers
                    </NavItem>
                    <NavItem eventKey={2} href="/">
                        Beaters
                    </NavItem>
                    <NavItem eventKey={2} href="/">
                        Spreaders
                    </NavItem>
                    <NavItem eventKey={2} href="/">
                        Multi-purpose
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
                    <NavItem eventKey={1} href="/">
                        <Glyphicon glyph="search" />
                    </NavItem>
                    <NavItem eventKey={2} href="/">
                        <Glyphicon glyph="shopping-cart" />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);
