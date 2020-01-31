import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import {companyReducer} from "./companyReducer";

const rootReducer = combineReducers({
    userReducer,
    companyReducer
});

export default rootReducer