import { applyMiddleware, createStore } from "redux";
import { productsReducer } from "../reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { productWatcher } from "../Saga/productSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(productsReducer,  composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(productWatcher)