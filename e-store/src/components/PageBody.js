import React, { Component } from "react";

import { Router, Switch, Route, Link } from "react-router-dom";
import Products from "./products/Products";
import ProductList from "./products/ProductList";

import "./PageBody.css";

const BasicPage = () => (
    <div>
        <div>Welcome to spatula city</div>
        <div>See all our <Link to="/products">products</Link></div>
    </div>    
);

const NoMatch = (props) => (
    <div>
        <div>Oops!  Not sure WTH you were trying to go...</div>
        <div>Location: {props.location.pathname}</div>
    </div>
);

/* 
Tutorial: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

 NOTE, you can do:
    <Route path="/products/" component={PlayerList}/>
    <Route path="/products/:productId" component={Product}/>
 */
export default () => (
    <div className="page-body">
        <Switch>
            <Route exact path="/" component={BasicPage} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:number" component={Products} />
            <Route component={NoMatch} />
        </Switch>
    </div>
);

