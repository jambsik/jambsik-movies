import {applyMiddleware, combineReducers, createStore} from "redux";
import popularReducer from './reducers/popular.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';


const _history = createHistory();
const middleware = routerMiddleware(_history);
const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    popularReducer,
    router: routerReducer
});

export const history = _history;
export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(middleware)
));
export default store;
