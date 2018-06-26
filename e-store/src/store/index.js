// 3rd-party libraries
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// root reducers / root sagas
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// exported actions
import { productLoadAction } from "./reducers/productsReducer";

export const actions = {
    productLoadAction
};

// Initialize redux and saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
