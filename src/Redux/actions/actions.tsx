import { IProduct } from "../../interfaces/IProduct";
import {types} from "./types"

// export const fetchProductAction = (data: IProduct) => {return {type: types.fetchProduct, payload: data}}; 
// export const fetchProductsAction =(data: IProduct[]) => {return {type: types.fetchProducts, payload: data}};

export const setProducts = (payload: any) => ({type: types.SET_PRODUCTS, payload});
export const fetchProducts = () => ({type: types.FETCH_PRODUCTS});