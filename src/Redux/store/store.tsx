import { createStore } from "redux";
import { productsReducer } from "../reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(productsReducer, composeWithDevTools());

