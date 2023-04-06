import {types} from "./types"
import { IProduct } from "../../interfaces/IProduct";

export const fetchProductAction = (data: IProduct) => {return {type: types.fetchProduct, payload: data}}; 
export const fetchProductsAction =(data: IProduct[]) => {return {type: types.fetchProducts, payload: data}};