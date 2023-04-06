import { IProduct } from "./IProduct";

export interface IProductState {
    data : IProduct[],
    product : IProduct | null,
    counter: number,

}