import { IProduct } from "../../interfaces/IProduct";
import {types} from "./types"

export const setProducts = (payload: any) => ({type: types.SET_PRODUCTS, payload});
export const fetchProductsAsync = () => ({type: types.FETCH_PRODUCTS_ASYNC});
export const setProduct = (payload: any) => ({type: types.SET_PRODUCT, payload});
export const fetchProductAsync = () => ({type: types.FETCH_PRODUCT_ASYNC});