export const TYPES = {
    BEFORE_LOADED: 'BEFORE_LOADED',
    LOADED: 'LOADED',
    FAILED: 'FAILED'
};


export const beforeLoaded = () => ({type: TYPES.BEFORE_LOADED, payload: []});
export const loaded = popularList => ({type: TYPES.LOADED, payload: popularList});
export const failed = error => ({type: TYPES.FAILED, payload: error});
