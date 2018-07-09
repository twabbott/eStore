import React, { Component } from "react";

import StarRating from "./StarRating";

export const ProductThumbnail = (props) => {
    const { 
        name, 
        manufacturer, 
        price, 
        stars
    } = props;

    const imagePath = `/Products/${props.image}_sm.png`;

    return (
        <section name="product-thumbnail">
            <div class="img-product-thumbnail">
                <img src={imagePath} alt="product image" className="img-responsive" />
            </div>
            <div class="product-thumbnail-title">
                {manufacturer} {name}
            </div>
            <div className="product-thumbnail-price">
                ${price}
            </div>
            <StarRating rating={stars} />
        </section>
    );
};
