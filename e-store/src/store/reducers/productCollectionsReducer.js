export const PRODUCT_COLLECTIONS_LOAD = "PRODUCT_COLLECTIONS_LOAD";
export const PRODUCT_COLLECTIONS_LOAD_SUCCESS = "PRODUCT_COLLECTIONS_LOAD_SUCCESS";
export const PRODUCT_COLLECTIONS_LOAD_ERROR = "PRODUCT_COLLECTIONS_LOAD_ERROR";

export const productCollectionsLoadAction = (id) => ({
        type: PRODUCT_COLLECTIONS_LOAD,
        id
    });

export const productCollectionsLoadSuccessAction = (productColleciton) => ({
        type: PRODUCT_COLLECTIONS_LOAD_SUCCESS,
        productColleciton
    });

export const productCollectionsLoadErrorAction = (error) => ({
        type: PRODUCT_COLLECTIONS_LOAD_ERROR,
        error
    });

const initialState = {
    loading: false,
    productCollecitonId: 0,
    productColleciton: undefined,
    error: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_COLLECTIONS_LOAD:
            return {
                ...state,
                loading: true,
                productCollecitonId: action.id,
                productColleciton: undefined,
                error: undefined
            };

        case PRODUCT_COLLECTIONS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                productColleciton: action.productColleciton,
                error: undefined
            };

        case PRODUCT_COLLECTIONS_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
    }

    return state;
}