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
                    name: "2 in 1 Kitchen Spatula and Tongs",
                    manufacturer: "Clever Tongs",
                    price: 7.99,
                    image: "CT-1100",
                    stars: 1
                },
                {
                    id: 1000,
                    name: "2 IN 1 Grip and Flip Spatula",
                    manufacturer: "Good Ideas",
                    price: 4.19,
                    image: "GI-X99-1", //https://www.aliexpress.com/item/Plastic-Egg-Spatula-2-IN-1-Grip-and-Flip-Spatula-Turner-for-Perfect-Pancake-French-Toast/32828247313.html
                    stars: 4
                },
                {
                    id: 1000,
                    name: "Flip Master 365",
                    manufacturer: "Nordic",
                    price: 9.99,
                    image: "NORD-FM-365",
                    stars: 3
                },
                {
                    id: 1000,
                    name: "The Really Big Spatula",
                    manufacturer: "Wilton",
                    price: 9.99,
                    image: "10404937", // http://www.michaels.com/really-big-spatula/10404937.html
                    stars: 5
                },
                {
                    id: 1000,
                    name: "Black Nylon Slotted Turner",
                    manufacturer: "Kitchenaid",
                    price: 7.99,
                    image: "KN002OHOBA", //http://www.pfaltzgraff.com/black-nylon-slotted-turner/KN002OHOBA.html?gclid=CjwKCAjwhevaBRApEiwA7aT538ecHKt5Thu_ucMI7lUISa0Z0aI5UGiZLAn33iSbIxoCBpt96DU3cBoClEoQAvD_BwE
                    stars: 4.5
                },
                {
                    id: 1000,
                    name: "Black Nylon Flex Turner",
                    manufacturer: "Kitchenaid",
                    price: 6.99,
                    image: "KC024OHOBA", // http://www.pfaltzgraff.com/black-nylon-flex-turner/KC024OHOBA.html?green=7F29F042-C773-53A1-A468-4ED043A12F00
                    stars: 4
                },
                {
                    id: 1000,
                    name: "Red Gourmet Blender Silicone Spatula",
                    manufacturer: "Kitchenaid",
                    price: 11.99,
                    image: "KN036OHERA", // http://www.pfaltzgraff.com/red-gourmet-blender-silicone-spatula/KN036OHERA.html?green=7F29F042-C773-53A1-A468-4ED043A12F00
                    stars: 3
                },
                {
                    id: 1000,
                    name: "Classic Bowl/Jar Scraper",
                    manufacturer: "Farberware",
                    price: 2.99,
                    image: "5081581", // http://www.pfaltzgraff.com/classic-plate-and-bowl-scraper/5081581.html#start=24
                    stars: 3
                },
            ]
        },    
        {
            title: "Most Popular",
            products: [
                {
                    id: 1000,
                    name: "Olivewood Crepe Turner",
                    manufacturer: "Sabatier",
                    price: 9.99,
                    image: "5135033", // http://www.pfaltzgraff.com/olivewood-crepe-turner/5135033.html#start=27
                    stars: 5
                },
                {
                    id: 1000,
                    name: "Professional Stainless Steel Slotted Turner",
                    manufacturer: "Farberware",
                    price: 6.99,
                    image: "5084423", // http://www.pfaltzgraff.com/professional-stainless-steel-slotted-turner/5084423.html
                    stars: 4.5
                },
                {
                    id: 1000,
                    name: "Triple Rivet Flex Turner",
                    manufacturer: "Sabatier",
                    price: 11.99,
                    image: "5154546", // http://www.pfaltzgraff.com/triple-rivet-flex-turner/5154546.html
                    stars: 4
                },
                {
                    id: 1000,
                    name: "Star Spangled Spatula",
                    manufacturer: "Areaware",
                    price: 9.99,
                    image: "JWSS2B", //https://www.areaware.com/products/star-spangled-spatula?variant=293091675
                    stars: 5
                },
                {
                    id: 1000,
                    name: "Aqua Sky Nylon Slotted Turner",
                    manufacturer: "Kitchenaid",
                    price: 5.99,
                    image: "KC002OHAQA",  // http://www.pfaltzgraff.com/aqua-sky-nylon-slotted-turner/KC002OHAQA.html
                    stars: 4
                },
            ]
        },
        {
            title: "Newest Items",
            products: [
                {
                    id: 1000,
                    name: "Aqua Sky Nylon Turner",
                    manufacturer: "Kitchenaid",
                    price: 5.99,
                    image: "KC015OHAQA", //http://www.pfaltzgraff.com/aqua-sky-nylon-short-turner/KC015OHAQA.html
                    stars: 3
                },
                {
                    id: 1000,
                    name: "Black Restaurant Stainless Steel Turner",
                    manufacturer: "Kitchenaid",
                    price: 14.99,
                    image: "KC023OHOBA",
                    stars: 5.0
                },
                {
                    id: 1000,
                    name: "Professional Stainless Steel Slotted Turner",
                    manufacturer: "Farberware",
                    price: 6.99,
                    image: "ST84423", // http://www.pfaltzgraff.com/professional-stainless-steel-slotted-turner/5084423.html
                    stars: 3
                },
                {
                    id: 1000,
                    name: "Spatula,5.5\",PK300",
                    manufacturer: "Grainger",
                    price: 31.90,
                    image: "38G719",
                    stars: 3
                },
                {
                    id: 1000,
                    name: "KPO-9 Offset Spatula",
                    manufacturer: "Winco",
                    price: 2.16,
                    image: "TKPO-9", // https://www.lionsdeal.com/wi-tkpo-9.html
                    stars: 2
                },
            ]
        },
    ],
};


// workerSaga
export default function*(action) {
    console.log(`PageConfig: loading`);
    try {
        yield call(delay, 1000);

        yield put(pageConfigLoadSuccessAction(tmpConfig));

        // const response = yield call(axios, {
        //     method: "GET",
        //     url: `http://localhost:8192/api/homePageConfig`
        // });

        //yield put(productLoadSuccessAction(response.data));
        console.log(`PageConfig: load success.`);
    } catch (error) {
        const msg = (error && error.message) || "Fatal error";
        yield put(pageConfigLoadErrorAction(msg));
        console.log(`PageConfig: LOAD FAILURE: ${msg}`);
    }
}