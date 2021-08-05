import { createStore, applyMiddleware, compose } from 'redux'
import dashBoardReducer from '../reducers/dashBoardReducer'
import thunk from 'redux-thunk'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    dashBoardReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;