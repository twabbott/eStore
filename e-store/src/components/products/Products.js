import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        if (!this.props.productInfo && !this.props.error) {
            this.props.productLoadAction(this.props.match.params.number)
        }
    }

    render() {
        const loadError = () => 
            <div>
                <h1>¯\_(ツ)_/¯</h1>
                <p>There was an error loading this product.  Product id: {this.props.productId}</p>                
            </div>;

        const loadSuccess = () =>
            <div>
                This is your product description!  Product number={this.props.productId}
            </div>

        return (
            <div>
                { this.props.error && loadError() }
                { this.props.productInfo && loadSuccess() }
                <Link to="/products">[products]</Link> | <Link to="/">[home]</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
