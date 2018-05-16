import React, { Component } from "react";
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
        <div className="row">
            <div className="col-md-3 logo">
                <img className="img-responsive" src="../img/spatula-city-logo.png" />
            </div>
            <div className="col-md-5">
                PANCAKE TURNERS | SCRAPERS | BARBECUE | SPREADERS | OTHER
            </div>
            <div className="col-md-2">
                (search)
            </div>
            <div className="col-md-1">
                (sign in)
            </div>
            <div className="col-md-1">
                (cart)
            </div>
        </div>
    );
}