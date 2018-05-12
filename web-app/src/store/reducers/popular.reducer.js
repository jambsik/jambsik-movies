import {TYPES} from '../actions/popular.actions';

const initialState = {
    popularList: [],
    isLoaded: false,
    askRetry: false
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
                popularList: action.payload,
                isLoaded: true
            };
        case TYPES.FAILED:
            const pepe = {
                ...state,
                isLoaded: true,
                popularList: [],
                askRetry: true
            };
            return pepe;
        default:
            return state;
    }
};

export default popularReducer;
