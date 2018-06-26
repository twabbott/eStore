import { combineReducers } from "redux";

import productsReducer from "./productsReducer";

// Combine all reducers here into one glorious über-reducer!
const rootReducer = combineReducers({
    products: productsReducer,
    //students: studentReducer
});

export default rootReducer;
