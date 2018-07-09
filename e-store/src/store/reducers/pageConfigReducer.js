export const PAGECONFIG_LOAD = "PAGECONFIG_LOAD";
export const PAGECONFIG_LOAD_SUCCESS = "PAGECONFIG_LOAD_SUCCESS";
export const PAGECONFIG_LOAD_ERROR = "PAGECONFIG_LOAD_ERROR";

export const pageConfigLoadAction = () => ({
        type: PAGECONFIG_LOAD
    });

export const pageConfigLoadSuccessAction = (pageConfig) => ({
        type: PAGECONFIG_LOAD_SUCCESS,
        pageConfig
    });

export const pageConfigLoadErrorAction = (error) => ({
        type: PAGECONFIG_LOAD_ERROR,
        error
    });

const initialState = {
    loading: false,
    pageConfig: undefined,
    error: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PAGECONFIG_LOAD:
            return {
                ...state,
                loading: true,
                pageConfig: undefined,
                error: undefined
            };

        case PAGECONFIG_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                pageConfig: action.pageConfig
            };

        case PAGECONFIG_LOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
    }

    return state;
}