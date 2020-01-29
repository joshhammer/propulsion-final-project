import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";


const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer)