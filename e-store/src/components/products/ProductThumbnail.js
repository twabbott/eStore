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
        <section className="product-thumbnail">
            <div className="product-thumbnail-image">
                <img src={imagePath} alt="product image" className="img-responsive" />
            </div>
            <div className="product-thumbnail-title">
                {manufacturer} {name}
            </div>
            <div className="product-thumbnail-price">
                ${price}
            </div>
            <StarRating rating={stars} />
        </section>
    );
};
