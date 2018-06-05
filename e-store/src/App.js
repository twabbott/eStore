import React, { Component } from "react";

import "./App.css";

import Header from "./components/header";
import PageBody from "./components/PageBody";
import Footer from "./components/footer";

export default () => (
    <div className="App">
        <Header />
        <PageBody />
        <Footer />
    </div>
);
