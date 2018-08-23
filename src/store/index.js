import {createStore, applyMiddleware} from "redux";
import asyncReducer from "../reducer/index";
import thunk from "redux-thunk"

const store = createStore(asyncReducer, applyMiddleware(thunk));
window.store= store
export default store;