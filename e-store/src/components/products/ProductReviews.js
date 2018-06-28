import React, { Component } from "react";
import FormattedText from "../common/FormattedText";

export const CustomerReview = (props) => 
    <div key={props.key || 0}>
        <h3>{props.username}</h3>
        <div style={{ "margin-left": "15px" }}>
            <div>{props.stars} / 5 stars</div>
            <div>{props.date}</div>
            <strong>{props.title}</strong>
            <FormattedText content={props.description} />
        </div>
    </div>;

export default (props) =>
    <section name="productReviews">
        <h2>Customer Reviews:</h2>
        { props.reviews ?
            props.reviews.map((item, idx) =>
                <CustomerReview key={idx} {...item} />) :
            <p>We would love to hear your feedback.  Be the first to write a review for this product!</p>
        }
    </section>;

