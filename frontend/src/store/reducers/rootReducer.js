import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import {companyReducer} from "./companyReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    userReducer,
    companyReducer,
    loginReducer,
});

export default rootReducer