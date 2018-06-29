import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const fixRating = (rating) => {
    if (typeof rating === "string") {
        rating = parseFloat(rating);
    }

    let x = Math.floor(rating * 2);
    let y = x /= 2;
    return y;
}

export default (props) => {
    const inRating = props.rating;
    const outRating = fixRating(inRating);
    switch (outRating) {
        case 5:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                </span>
            );

        case 4.5:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                </span>
            );
        
        case 4:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case 3.5:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case 3:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case 2.5:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case 2:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case 1.5:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case 1:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        case .5:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["fas", "star-half-alt"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
        
        default:
            return (
                <span name="stars">
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                    <FontAwesomeIcon icon={["far", "star"]} />
                </span>
            );
    }
}
