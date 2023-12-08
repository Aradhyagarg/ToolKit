import {configureStore} from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
    reducer: {
        custom: customReducer,
    },

});

//combineReducers for combinning 
export default store;