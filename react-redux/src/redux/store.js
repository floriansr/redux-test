import { createStore } from "redux";
import pastasReducer from "./pastas/pastasReducer";

let store = createStore(pastasReducer); // pastasReducer is the name of our future reducer function

export default store;
