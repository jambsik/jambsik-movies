export const TYPES = {
    BEFORE_LOADED: 'BEFORE_LOADED_POPULAR_LIST',
    LOADED: 'LOADED_POPULAR_LIST',
    FAILED: 'FAILED_POPULAR_LIST',
    SET_PAGE: 'SET_PAGE_POPULAR_LIST'
};


export const beforeLoaded = () => ({type: TYPES.BEFORE_LOADED});
export const loaded = data => ({type: TYPES.LOADED, payload: data});
export const failed = error => ({type: TYPES.FAILED, payload: error});
export const setPage = page => ({type: TYPES.SET_PAGE, payload: {page}});
