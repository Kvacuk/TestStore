import { IProductState } from "../../interfaces/IProductState"
import { types } from "../actions/types";


const initialState: IProductState = {
    data : [],
    product : null,
    counter: 0,
}

export const productsReducer = (state = initialState, action :any) => {
    switch(action.type) {
        case types.fetchProduct: 
        return {
            ...state,
            product: action.payload
        };
        case types.fetchProducts:
            return {
              ...state,
              data: action.payload,
            };
        default: 
        return state;
    }
}