export const PRODUCT_LOAD = "PRODUCT_LOAD";
export const PRODUCT_LOAD_SUCCESS = "PRODUCT_LOAD_SUCCESS";
export const PRODUCT_LOAD_ERROR = "PRODUCT_LOAD_ERROR";

export const productLoadAction = (id) => ({
        type: PRODUCT_LOAD,
        id
    });

export const productLoadSuccessAction = (productInfo) => ({
        type: PRODUCT_LOAD_SUCCESS,
        productInfo
    });

export const productLoadErrorAction = (error) => ({
        type: PRODUCT_LOAD_ERROR,
        error
    });

const initialState = {
    loading: false,
    productId: 0,
    productInfo: undefined,
    error: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LOAD:
            return {
                ...state,
                loading: true,
                productId: action.id,
                productInfo: undefined,
                error: undefined
            };

        case PRODUCT_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                productInfo: action.productInfo,
                error: undefined
            };

        case PRODUCT_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
    }

    return state;
}