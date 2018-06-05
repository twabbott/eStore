import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

import "./Footer.css";

export default () => (
    <footer className="footer">
        <div className="container-fluid">        
            <Col smOffset={2} sm={5} mdOffset={3} md={4}>
                <h1>Customer Service</h1>
                <div><Link to="/contact-us#">Contact Us</Link></div>
                <div><Link to="/store-finder">Store Finder</Link></div>
                <div><Link to="/international-orders">International Orders</Link></div>
                <div><Link to="/privacy-policy">Privacy & Security</Link></div>
                <div><Link to="/terms-of-use">Terms of Use</Link></div>
            </Col>
            <Col sm={5} md={4}>
                <h1>My Account</h1>
                <div><Link to="/account/order-status">Order Status</Link></div>
                <div><Link to="/account/returns-exchanges">Returns / Exchanges</Link></div>
                <div><Link to="/account/gift-cards">Gift Cards</Link></div>
                <div><Link to="/account/password-recovery">Password Recovery</Link></div>
            </Col>
        </div>
        <div className="container-fluid">
            <div className="copyright">
                (c) 2018 Tom Abbott all rights reserved
            </div>
        </div>
    </footer>
);

