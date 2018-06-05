import React from "react";

import { Router, Switch, Route, Link } from "react-router-dom";
import Products from "./products/Products";
import ProductList from "./products/ProductList";

import NoMatch from "./NoMatch";
import Home from "./pages/Home";

export default () => (
    <div className="page-body">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:number" component={Products} />
            <Route component={NoMatch} />
        </Switch>
    </div>
);

