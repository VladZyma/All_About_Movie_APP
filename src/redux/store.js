import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {moviesReducer} from "./moviesSlice";


const rootReducer = combineReducers({
    moviesReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export {store}