import React from "react";
import { Link } from "react-router-dom";

import "./NoMatch.css";

export default (props) => (
    <div className="no-match">
        <div className="no-match-emoji">(╯°□°）╯︵ ┻━┻</div>
        <h1>Aw, f*** it!</h1>
        <div>Not sure WTH you were trying to go...  That page simply does not exist.</div>
        <div><strong>Location:</strong> {props.location.pathname}</div>
    </div>
);
