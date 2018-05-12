import {combineReducers, createStore, applyMiddleware} from "redux";
import popularReducer from './reducers/popular.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    popularReducer
});
export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));
export default store;
