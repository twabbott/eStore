// 3rd-party libs
import { takeLatest } from "redux-saga/effects";

// Actions
import { productLoadAction } from "../reducers/productsReducer";

// Watcher sagas
import productsWatcherSaga from "./productsSaga";

export default function* () {
    yield takeLatest(productLoadAction, productsWatcherSaga);
}