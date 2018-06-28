import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { productLoadSuccessAction, productLoadErrorAction } from "../reducers/productsReducer";

import axios from "axios";

const nordic = {
    id: 1000,
    stockNumber: "Nord-FM-365",
    name: "Flip Master 365",
    manufacturer: "Nordic",
    price: 9.99,
    image: "NordicWare_FlipMaster",
    description: [
        "Whether you're cooking up a batch of tasty hot cakes for breakfast, or grilling prime rib steaks for dinner, this is the spatula for you, any day of the year!",
        "Sturdy stainless steel handle won't bend or rust, and silicone blade won't scratch the non-stick surface of your pan.",
        [
            "Lifetime warranty.", 
            "Manufacturer satisfaction guarantee, or your money back!"
        ]
    ],
    specs: [
        [ "Length", "13\"" ],
        [ "Width", "3.5\"" ],
        [ "Handle type", "Stainless steel" ],
        [ "Blade type", "Silicone" ],
        [ "Color", "Stainless steel with black blade"],
        [ "Made in", "Phillipenes" ]
    ],
    reviews: [
        {
            username: "Betty Krocker",
            stars: 5.0,
            date: "2018-06-22",
            title: "A great spatula for first-time buyers!",
            description: [
                "Has a good sturdy feel.  I didn't feel like this was going to be too flimsy when picking up heavy food, or even when stirring thick casseroles.",
                "If you only have one spatula in your kitchen, this one should be it."
            ]
        },
        {
            username: "John Jensen",
            stars: 3.0,
            date: "2017-12-03",
            title: "Not as good as the Flip Master Deluxe",
            description: [
                "I give this one a solid meh!",
                ":/",
                "Had it for about a month.  The edge of the pan melted the blade in several places.  Don't rest the blade on the edge of the pan."
            ]
        },
        {
            username: "Bill Parker",
            stars: 1.0,
            date: "2017-08-19",
            title: "Buy USA!",
            description: [
                "If it's not made in 'murrica, it's only good for picking up dog s***."
            ]
        },
    ]
}

// workerSaga
export default function*(action) {
    console.log(`Products: loading id=${action.id}`);
    try {
        // const response = yield call(axios, {
        //     method: "GET",
        //     url: `http://localhost:8192/api/products/${action.id}`
        // });

        //yield call(delay, 1000);


        yield put(productLoadSuccessAction(nordic));
        //yield put(productLoadSuccessAction(response.data));
        console.log(`Products: load success.`);
    } catch (error) {
        const msg = (error && error.message) || "Fatal error";
        yield put(productLoadErrorAction(msg));
        console.log(`Products: LOAD FAILURE: ${msg}`);
    }
}