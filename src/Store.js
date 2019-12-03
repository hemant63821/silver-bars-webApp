import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './redux/reducers/index'
import thunk from 'redux-thunk'

let initState = {}
const middleware = [thunk];
const Store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// console.log('check root reducer', rootReducer)

export default Store;