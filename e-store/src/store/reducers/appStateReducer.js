
const LOAD_PAGE = "LOAD_PAGE";
const LOAD_PAGE_COMPLETED = "LOAD_PAGE_COMPLETED";
const LOAD_PAGE_ERROR = "LOAD_PAGE_ERROR";

const pageState = Object.freeze({
    notLoaded,
    home,
    genericPage,
    productCategory,
    productCollection,
    productDetails,
    error
})

export const loadPage = (pageState) => ({
    type: LOAD_PAGE, 
    pageState 
});

export const loadPageCompleted = (pageData) => ({
    type: LOAD_PAGE_COMPLETED,
    pageData
});

export const loadPageError = (errorData) => ({
    type: LOAD_PAGE_ERROR,
    errorData
});

const initialState = {
    pageState: pageState.notLoaded;
    pageData: undefined,
    loadPending: false,
    loadError: {
        message: undefined
    }
}

const appStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PAGE: 
            return {
                ...state,
                pageState,
                loadPending: true
            };

        case LOAD_PAGE_COMPLETED:

        case LOAD_PAGE_ERROR:

        default:
            return state;
    }
}

export default appStateReducer;
