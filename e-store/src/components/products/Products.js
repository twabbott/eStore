import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Col } from 'react-bootstrap';

import "./Products.css";

import { actions } from "../../store";

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
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        if (!this.props.productInfo && !this.props.error && !this.props.loading) {
            this.props.productLoadAction(this.props.match.params.number)
        }
    }

    loadingPage() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Col md={4}>
                        <div className="product-loading product-loading-image">
                            <div className="loader"></div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="product-loading product-loading-title"></div>
                        <div className="product-loading product-loading-price"></div>
                        <div className="product-loading product-loading-description"></div>
                        <div className="product-loading product-loading-line"></div>
                        <div className="product-loading product-loading-line"></div>
                        <div className="product-loading product-loading-halfline"></div>
                    </Col>
                </div>
            </div>
        );
    }

    loadError () {
        return (
            <div>
                <img className="product-image" src="" />
                <h1>¯\_(ツ)_/¯</h1>
                <p>There was an error loading this product.  Product id: {this.props.productId}</p>                
                <div>
                    <Link to="/products">[Products]</Link> | <Link to="/">[Home]</Link>
                </div>
            </div>);
    } 

    loadSuccess() {
        return (
            <div>
                <div>
                    This is your product description!  Product number={this.props.productId}
                </div>
            </div>
        );
    }

    render() {
        if (this.props.loading) {
             return this.loadingPage();
        }

        if (this.props.error) {
             return this.loadError();
        }

        return this.loadSuccess();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
