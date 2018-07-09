import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Home.css";

import { actions } from "../../store";

import ProductSection from "./ProductSection";

const mapStateToProps = state => {
    return {
        pageConfig: state.pageConfig.pageConfig
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pageConfigLoadAction: (productId) => dispatch(actions.pageConfigLoadAction())
    }
}

class Home extends Component {    
    componentDidMount() {
        if (!this.props.pageConfig && !this.props.error && !this.props.loading) {
            this.props.pageConfigLoadAction();
        }
    }

    knowYourSpatula() {
        return (
            <div>
                <div>
                    <h1>What kind of spatula should I buy?</h1>
                    <p>Whether you're shopping your first spatula or your 100th, we want to help
                    you make the choice that's right for you.  To answer your question just
                    ask yourself, what do you want to do with your spatula?</p>

                    <p>There are spatulas for all kinds of uses!  Do you just need something
                    to flip burgers and pancakes?  Maybe you're looking for something to scrape
                    out the last bit of peanut butter from a jar.  Or what if you need something
                    to spread frosting over a freshly-baked cake.  Whatever your needs, there's
                    a spatula that's right for you!</p>

                    <p>Here are a few things to look for in a good-quality spatula.</p>
                    <img className="center-image" src="../img/spatula-diagram.png" alt="logo" />
                </div>
            </div>
        );
    }

    loadingPage() {
        return (
            <section id="homepage-loader">
                <div className="title" />
                <div className="image">
                    <div className="loader"></div>
                </div>
            </section>
        );
    }

    loadError () {
        return (
            <div>
                <h1>¯\_(ツ)_/¯</h1>
                <p>Error loading page.  Is the server running?</p>
                <p>If you have not started the server, please run the following commands:</p>
                <pre>
                    cd e-store-api<br/>
                    npm install<br/>
                    npm start<br/>
                </pre>
                <p style={{ "margin-bottom": "200px" }} >
                    If the server is running, please check the console window in the browser, or the output of e-store-api for errors.
                </p>
                <div style={{ "margin-bottom": "300px" }} >
                    <Link to="/products">[Products]</Link> | <Link to="/">[Home]</Link>
                </div>
            </div>);
    } 

    render() {
        if (this.props.pageConfig) {
            return this.props.pageConfig.featuredGroups.map((item, idx) => 
                <ProductSection key={idx} {...item} />);
        }

        if (this.props.loadError) {
            return this.loadError();
        }

        return this.loadingPage();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
