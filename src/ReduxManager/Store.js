import { createStore } from "redux";
import myReducer from "./Reducer";
import { loadState } from "../LocalStorage";

const persistedStore =loadState();

export const store= createStore(myReducer,persistedStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;