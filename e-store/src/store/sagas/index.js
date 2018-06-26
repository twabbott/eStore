// 3rd-party libs
import { takeLatest } from "redux-saga/effects";

// Actions
import { PRODUCT_LOAD } from "../reducers/productsReducer";

// Watcher sagas
import productsWatcherSaga from "./productsSaga";

export default function* () {
    yield takeLatest(PRODUCT_LOAD, productsWatcherSaga);
}