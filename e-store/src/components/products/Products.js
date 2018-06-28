import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Col } from 'react-bootstrap';

import "./Products.css";

import { actions } from "../../store";

import ProductReviews from "./ProductReviews";
import FormattedText from "../common/FormattedText";

const mapStateToProps = state => {
    return {
        ...state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productLoadAction: (productId) => dispatch(actions.productLoadAction(productId))
    }
}

class Products extends Component
{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.productInfo && !this.props.error && !this.props.loading) {
            this.props.productLoadAction(this.props.match.params.number)
        }
    }

    loadSuccess() {
        const { 
            stockNumber, 
            name, 
            manufacturer, 
            price, 
            specs, 
            description, 
            reviews 
        } = this.props.productInfo;

        const imagePath = `/Products/${this.props.productInfo.image}_reg.png`;
        return (
            <section id="product-info">
                <h1>
                    {manufacturer} {name}
                </h1>
                <div>
                    <div className="product-image">
                        <img src={imagePath} alt="product image" className="img-responsive" />
                    </div>
                    <div className="product-summary">
                        <h2>
                            ${price}
                        </h2>
                        <h3>
                            Item #{stockNumber}
                        </h3>
                        <h3 className="product-description-margin">Description:</h3>
                        <div>
                            <FormattedText content={description} />
                        </div>
                    </div>
                </div>
                <Table striped condensed hover>
                    <thead>
                        <tr><th colSpan="2">Specifications:</th></tr>
                    </thead>
                    <tbody> {
                        specs.map((item, id) => 
                            <tr key={id}>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                            </tr>)
                    }
                    </tbody>
                </Table>

                <ProductReviews reviews={reviews} />
            </section>
        );
    }

    loadingPage() {
        return (
            <section id="loading">
                <p className="title" />
                <p className="image">
                    <div className="loader"></div>
                </p>
                <div className="product-summary">
                    <p className="price" />
                    <p className="stock-number" />
                    <p className="description" />
                    <p className="line" />
                    <p className="line" />
                    <p className="line" />
                    <p className="half-line" />
                </div>
            </section>
        );
    }

    loadError () {
        return (
            <div>
                <h1>¯\_(ツ)_/¯</h1>
                <p>There was an error loading this product.  Product id: {this.props.productId}</p>                
                <div>
                    <Link to="/products">[Products]</Link> | <Link to="/">[Home]</Link>
                </div>
            </div>);
    } 

    render() {
        if (this.props.error) {
             return this.loadError();
        }

        if (this.props.productInfo) {
            return this.loadSuccess();
        }

         return this.loadingPage();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
