import { useEffect, useState } from "react"
import { fetchProductAsync } from "../../Redux/actions/actions";
import { IProduct } from "../../interfaces/IProduct";
import { useParams } from "react-router-dom";
import { ImageDetial } from "./ImageDetail";
import { useDispatch, useSelector } from "react-redux";
import { ProductInfo } from "./productInfoPanel";

export const ProductDetailPage =() => {
    const {id} = useParams();
    const product = useSelector((state: any) =>state.product);
    const dispatch = useDispatch();

    useEffect(() => {
          if(id !== undefined) {
            dispatch(fetchProductAsync(parseInt(id)))
          }
      }, [id]);

    return (
        <div className="productDetails">
            <ImageDetial imgPath={product?.image}/>
            <ProductInfo product={product}/>
        </div>
    )
}