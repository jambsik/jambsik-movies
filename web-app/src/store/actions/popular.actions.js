export const TYPES = {
    BEFORE_LOADED: 'BEFORE_LOADED',
    LOADED: 'LOADED',
    FAILED: 'FAILED'
};


export const beforeLoaded = () => ({type: TYPES.BEFORE_LOADED});
export const loaded = data => ({type: TYPES.LOADED, payload: data});
export const failed = error => ({type: TYPES.FAILED, payload: error});
