import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import {companyReducer} from "./companyReducer";
import loginReducer from "./loginReducer";
import { salaryReducer } from './salaryReducer'
import {dateReducer} from "./dateReducer";
import { recordsReducer} from './recordsReducer'

const rootReducer = combineReducers({
    userReducer,
    companyReducer,
    loginReducer,
    salaryReducer,
    dateReducer,
    recordsReducer,
});

export default rootReducer