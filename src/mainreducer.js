import { combineReducers } from "redux";
import UserList from "./userreducer";
import ProductList from "./productreducer";
import ApiList from "./apireducer";

const MainReducer = combineReducers({
    UserList, ProductList, ApiList
});

export default MainReducer;