import {TYPES} from '../actions/popular.actions';

const initialState = {
    popularList: [],
    isLoaded: false,
    askRetry: false,
    page: 1,
    total_results: 0,
    total_page: 0
};

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.BEFORE_LOADED:
            return {
                ...state,
                isLoaded: false,
                popularList: []
            };
        case TYPES.LOADED:
            return {
                ...state,
                popularList: action.payload.results,
                isLoaded: true,
                page: action.payload.page,
                total_results: action.payload.total_results,
                total_page: action.payload.total_page
            };
        case TYPES.FAILED:
            return {
                ...state,
                isLoaded: true,
                popularList: [],
                askRetry: true,
                page: 0,
                total_results: 0,
                total_page: 0
            };
        default:
            return state;
    }
};

export default popularReducer;
