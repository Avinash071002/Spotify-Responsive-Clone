import { createStore, combineReducers, applyMiddleware } from "redux";
import  {thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { songReducer } from "./Reducers/songReducer";

const initialState = {};

const reducer = combineReducers({
    mainSong: songReducer,
});

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
