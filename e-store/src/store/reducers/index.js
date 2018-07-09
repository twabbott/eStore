import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import pageConfigReducer from "./pageConfigReducer";
import productsCollectionReducer from "./productCollectionsReducer";

// Combine all reducers here into one glorious über-reducer!
const rootReducer = combineReducers({
    products: productsReducer,
    pageConfig: pageConfigReducer,
    productsCollection: productsCollectionReducer
});

export default rootReducer;
