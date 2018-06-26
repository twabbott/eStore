import { call, put } from "redux-saga/effects";

import { productLoadSuccessAction, productLoadErrorAction } from "../reducers/productsReducer";

import axios from "axios";

// workerSaga
export default function*(action) {
    console.log(`Products: loading id=${action.id}`);
    try {
        const response = yield call(axios, {
            method: "GET",
            url: `http://localhost:8192/api/products/${action.id}`
        });

        yield put(productLoadSuccessAction(response.data));
        console.log(`Products: load success.`);
    } catch (error) {
        const msg = (error && error.message) || "Fatal error";
        yield put(productLoadErrorAction(msg));
        console.log(`Products: LOAD FAILURE: ${msg}`);
    }
}