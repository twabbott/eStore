import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import Products from "./Products";
import ProductList from "./ProductList";

const BasicPage = () => (
    <div>
        <div>Welcome to spatula city</div>
        <div>See all our <a href="./products">products</a></div>
    </div>    
);

/* 
Tutorial: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

 NOTE, you can do:
    <Route path="/products/" component={PlayerList}/>
    <Route path="/products/:productId" component={Product}/>
 */
export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={BasicPage} />
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:number" component={Products}/>
        </Switch>
    </div>
);

