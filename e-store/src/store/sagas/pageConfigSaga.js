import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { pageConfigLoadSuccessAction, pageConfigLoadErrorAction } from "../reducers/pageConfigReducer";

import axios from "axios";

const tmpConfig = {
    carousel: 
    [

    ],

    featuredGroups: 
    [
        {
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
        {
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
        {
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
    ],
};


// workerSaga
export default function*(action) {
    console.log(`PageConfig: loading`);
    try {
        // const response = yield call(axios, {
        //     method: "GET",
        //     url: `http://localhost:8192/api/homePageConfig`
        // });
        yield call(delay, 1000);

        yield put(pageConfigLoadSuccessAction(tmpConfig));
        //yield put(productLoadSuccessAction(response.data));
        console.log(`PageConfig: load success.`);
    } catch (error) {
        const msg = (error && error.message) || "Fatal error";
        yield put(pageConfigLoadErrorAction(msg));
        console.log(`PageConfig: LOAD FAILURE: ${msg}`);
    }
}