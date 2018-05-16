export const TYPES = {
    BEFORE_LOADED: 'BEFORE_LOADED_POPULAR_LIST',
    LOADED: 'LOADED_POPULAR_LIST',
    FAILED: 'FAILED_POPULAR_LIST',
    SET_PAGE: 'SET_PAGE_POPULAR_LIST',
    SET_CURRENT_MOVIE_SELECTED: 'SET_CURRENT_MOVIE_SELECTED',
    SET_FILTER_MOVIES_AUTOCOMPLETE: 'SET_FILTER_MOVIES_AUTOCOMPLETE',
    BEFORE_MOVIES_AUTOCOMPLETE: 'BEFORE_MOVIES_AUTOCOMPLETE',
    LOADED_MOVIES_AUTOCOMPLETE: 'LOADED_MOVIES_AUTOCOMPLETE',
    SHOW_MOVIE_FROM_AUTOCOMPLETE: 'SHOW_MOVIE_FROM_AUTOCOMPLETE',
    CLEAR_MOVIE_FROM_AUTOCOMPLETE: 'CLEAR_MOVIE_FROM_AUTOCOMPLETE',
    WHEN_NAVIGATE_TO_DETAIL: 'WHEN_NAVIGATE_TO_DETAIL',
};


export const beforeLoaded = () => ({type: TYPES.BEFORE_LOADED});
export const loaded = data => ({type: TYPES.LOADED, payload: data});
export const failed = error => ({type: TYPES.FAILED, payload: error});
export const setPage = page => ({type: TYPES.SET_PAGE, payload: {page}});
export const setCurrentMovieSelected = movie => ({type: TYPES.SET_CURRENT_MOVIE_SELECTED, payload: {movie}});
export const setFilterMoviesAutoComplete = filter => ({type: TYPES.SET_FILTER_MOVIES_AUTOCOMPLETE, payload: {filter}});
export const beforeMoviesAutoComplete = () => ({type: TYPES.BEFORE_MOVIES_AUTOCOMPLETE});
export const loadedMoviesAutoComplete = data => ({type: TYPES.LOADED_MOVIES_AUTOCOMPLETE, payload: data});
export const showMovieFromAutoComplete = movie => ({type: TYPES.SHOW_MOVIE_FROM_AUTOCOMPLETE, payload: movie});
export const clearMovieFromAutoComplete = () => ({type: TYPES.CLEAR_MOVIE_FROM_AUTOCOMPLETE});
export const whenNavigateToDetail = movie => ({type: TYPES.WHEN_NAVIGATE_TO_DETAIL, payload: {movie}});
