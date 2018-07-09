// 3rd-party libs
import { takeLatest } from "redux-saga/effects";

// Actions
import { PRODUCT_LOAD } from "../reducers/productsReducer";
import { PAGECONFIG_LOAD } from "../reducers/pageConfigReducer";
import { PRODUCT_COLLECTIONS_LOAD } from "../reducers/productCollectionsReducer";

// Watcher sagas
import productsWatcherSaga from "./productsSaga";
import pageConfigWatcherSaga from "./pageConfigSaga";
import productCollectionsWatcherSaga from "./productCollectionsSaga";

export default function* () {
    yield takeLatest(PRODUCT_LOAD, productsWatcherSaga);
    yield takeLatest(PAGECONFIG_LOAD, pageConfigWatcherSaga);
    yield takeLatest(PRODUCT_COLLECTIONS_LOAD, productCollectionsWatcherSaga);
}