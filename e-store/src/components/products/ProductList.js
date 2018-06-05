import React, { Component } from "react";
import { Link } from "react-router-dom";

export default () => (
    <div>
        <ol>
            <li>This is <a href="./products/1">product one</a></li>
            <li>This is <a href="./products/2">product two</a></li>
        </ol>
        <Link to="/">[home]</Link>
    </div>
);

