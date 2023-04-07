import { IProduct } from "./IProduct";

export interface IProductState {
    products : IProduct[],
    product : IProduct | null,
}