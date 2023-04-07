import { IProductState } from "../../interfaces/IProductState"
import { types } from "../actions/types";


const initialState: IProductState = {
    data : [],
    product : null,
}

export const productsReducer = (state = initialState, action :any) => {
    switch(action.type) {
        case types.SET_PRODUCT: 
        return {
            ...state,
            product: action.payload
        };
        case types.SET_PRODUCTS:
            return {
              ...state,
              data: action.payload,
            };
        default: 
        return state;
    }
}