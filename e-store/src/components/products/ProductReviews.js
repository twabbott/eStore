import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormattedText from "../common/FormattedText";
import StarRating, { fixRating } from "./StarRating";

export const CustomerReview = (props) => 
    <div key={props.key || 0}>
        <h3>
            <FontAwesomeIcon icon={["fas", "user-circle"]} /> {props.username}
        </h3>
        <div style={{ "margin-left": "25px" }}>
            <StarRating rating={props.stars} /> <strong>{props.title}</strong>
            <div>{props.date}</div>
            <FormattedText content={props.description} />
        </div>
    </div>;

const averageRating = reviews => {
    let total = 0;
    for (let item of reviews) {
        total += item.stars;
    }

    return fixRating(total / reviews.length);
}

export default (props) => {
    const avg = averageRating(props.reviews);
    return (
        <section name="productReviews">
            <h2>Customer Reviews:</h2>
            <div>
                <StarRating rating={avg} /> {avg.toFixed(1)} stars.
            </div>
            <div>
                {props.reviews.length} reviews.  
            </div>
            { props.reviews ?
                props.reviews.map((item, idx) =>
                    <CustomerReview key={idx} {...item} />) :
                <p>We would love to hear your feedback.  Be the first to write a review for this product!</p>
            }
        </section>
    );
}

