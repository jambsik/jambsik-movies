import {TYPES} from '../actions/popular.actions';

const initialState = {
    popularList: [],
    isLoaded: false,
    askRetry: false,
    page: 0,
    total_results: 0,
    total_pages: 0,
    limit: 1
};

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.BEFORE_LOADED:
            return {
                ...state,
                isLoaded: false
            };
        case TYPES.LOADED:
            return {
                ...state,
                popularList: action.payload.results,
                isLoaded: true,
                total_results: action.payload.total_results,
                total_pages: action.payload.total_pages < 1000 ? action.payload.total_pages : 999
            };
        case TYPES.FAILED:
            return {
                ...state,
                isLoaded: true,
                askRetry: true
            };
        case TYPES.SET_PAGE:
            return {
                ...state,
                page: action.payload.page
            };
        default:
            return state;
    }
};

export default popularReducer;
