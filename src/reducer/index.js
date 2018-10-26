import {awsReducer} from "./awsList";
import {combineReducers} from "redux";
const ListApp = combineReducers({ awsReducer});
export default ListApp;