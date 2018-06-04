import React, { Component } from "react";

export default (props) => (
    <div>This is your product description!  Product number={props.match.params.number}</div>
);

