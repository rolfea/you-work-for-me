import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunkMiddleware from "redux-thunk";
import {legislators} from "../reducers/legislators";

const reducer = combineReducers({
  legislators,
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  process.env.NODE_ENV !== "production" && window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

export default (initialState) => (
  createStoreWithMiddleware(reducer, initialState)
);
