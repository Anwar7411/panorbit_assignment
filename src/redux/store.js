import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Reducer} from "./Reducer"

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

//creating store with middleware using redux thunk
const store = legacy_createStore(
  Reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export { store };
