import React, { Component } from "react";
import { ProductThumbnail } from "../products/ProductThumbnail";

const ProductRow = (props) => (
    <div className="row"> {
        props.products.map((product, idx) => 
            <div className="col-sm-3">
                <ProductThumbnail key={idx} {...product} />
            </div>
        )
    }
    </div>
);

class ProductSection extends Component {
    render() {
        let rowSet = [];
        for (let i = 0; i < this.props.products.length; i++) {
            let col = i % 4;
            let row = Math.floor(i / 4);
            if (!rowSet[row]) {
                rowSet[row] = [];
            }
    
            rowSet[row].push(this.props.products[i]);
        }
    
        return (
            <section class="product-section">
                <h1>{this.props.title}</h1>
                <div className="container">
                    { rowSet.map((row, rowNum) => <ProductRow key={rowNum} products={row} />) }
                </div>
            </section>
        );
    };
};

export default ProductSection;