import {combineReducers} from "redux";
import { userReducer } from "./userReducer";
import {companyReducer} from "./companyReducer";
import loginReducer from "./loginReducer";
import { salaryReducer } from './salaryReducer'

const rootReducer = combineReducers({
    userReducer,
    companyReducer,
    loginReducer,
    salaryReducer,
});

export default rootReducer