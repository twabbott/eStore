// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Spatula City App
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// Progressive website stuff
import registerServiceWorker from "./registerServiceWorker";

// Font-Awesome library setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, far);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

registerServiceWorker();
