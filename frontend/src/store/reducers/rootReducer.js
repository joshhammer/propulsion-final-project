import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import {companyReducer} from "./companyReducer";
import loginReducer from "./loginReducer";
import {dateReducer} from "./dateReducer";

const rootReducer = combineReducers({
    userReducer,
    companyReducer,
    loginReducer,
    dateReducer,
});

export default rootReducer