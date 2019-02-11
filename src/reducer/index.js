import {awsReducer} from "./awsList";
import {fireReducer} from "./fireBaseR";


import {combineReducers} from "redux";
const ListApp = combineReducers({ awsReducer,fireReducer});
export default ListApp;