import {TYPES} from '../actions/popular.actions';

const initialState = {
    filter: '',
    popularList: [],
    moviesAutoCompleteList: [],
    isAutoCompleteLoaded: true,
    isMovieByAutoComplete: false,
    isLoaded: false,
    askRetry: false,
    movieSelected: null,
    page: 1,
    offset: 0,
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
                page: action.payload.page,
                offset: action.payload.page - 1,
            };
        case TYPES.SET_FILTER_MOVIES_AUTOCOMPLETE:
            return {
                ...state,
                movieSelected: null,
                filter: action.payload.filter
            };
        case TYPES.BEFORE_MOVIES_AUTOCOMPLETE:
            return {
                ...state,
                isAutoCompleteLoaded: false
            };
        case TYPES.LOADED_MOVIES_AUTOCOMPLETE:
            return {
                ...state,
                isAutoCompleteLoaded: true,
                moviesAutoCompleteList: action.payload.results
            };
        case TYPES.SET_CURRENT_MOVIE_SELECTED:
            return {
                ...state,
                moviesAutoCompleteList: [],
                movieSelected: action.payload.movie
            };
        case TYPES.SHOW_MOVIE_FROM_AUTOCOMPLETE:
            return {
                ...state,
                isMovieByAutoComplete: true,
                popularList: action.payload
            };
        case TYPES.CLEAR_MOVIE_FROM_AUTOCOMPLETE:
            return {
                ...state,
                filter: '',
                movieSelected: null,
                moviesAutoCompleteList: [],
                isMovieByAutoComplete: false,
                popularList: []
            };
        case TYPES.WHEN_NAVIGATE_TO_DETAIL:
            return {
                ...state,
                movieSelected: action.payload.movie
            };
        default:
            return state;
    }
};

export default popularReducer;
