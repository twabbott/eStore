import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
    <div>
        <div>This is your product description!  Product number={props.match.params.number}</div>
        <Link to="/products">[products]</Link> | <Link to="/">[home]</Link>
    </div>
);

