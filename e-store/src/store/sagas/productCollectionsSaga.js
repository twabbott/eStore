import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { productCollectionsLoadSuccessAction, productCollectionsLoadErrorAction } from "../reducers/productCollectionsReducer";

import axios from "axios";

const mockCollections = {
    "deals-of-the-day": {
        title: "Deals of the Day",
        products: [
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
        ]
    },

    "most-popular": {
        title: "Most Popular",
        products: [
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
        ]
    },

    "newest-items": {
        title: "Newest Items",
        products: [
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
            {
                id: 1000,
                name: "Flip Master 365",
                manufacturer: "Nordic",
                price: 9.99,
                image: "NordicWare_FlipMaster",
                stars: 3
            },
        ]
    },
}

// workerSaga
export default function*(action) {
    console.log(`ProductCollections: loading id=${action.id}`);
    try {
        // const response = yield call(axios, {
        //     method: "GET",
        //     url: `http://localhost:8192/api/product-collections/${action.id}`
        // });

        yield call(delay, 1000);
throw "Awwww, crap!!";

        yield put(productCollectionsLoadSuccessAction(mockCollections[action.id]));
        //yield put(productCollectionsLoadSuccessAction(response.data));
        console.log(`ProductCollections: load success.`);
    } catch (error) {
        const msg = (error && error.message) || "Fatal error";
        yield put(productCollectionsLoadErrorAction(msg));
        console.log(`ProductCollections: LOAD FAILURE: ${msg}`);
    }
}
