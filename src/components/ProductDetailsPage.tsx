import { useEffect, useState } from "react"
import { store } from "../Redux/store/store";
import { fetchProductAsync } from "../Redux/actions/actions";
import { IProduct } from "../interfaces/IProduct";
import { useParams } from "react-router-dom";

export const ProductDetailPage =() => {
    const {id} = useParams();
    const [product, setProduct] = useState<IProduct | null>(null)

    useEffect(() => {
      store.dispatch(fetchProductAsync());
      setProduct(store.getState().product)
    }, [])
    
    
    return (
        <>
            <h1>{product?.title}</h1>
        </>
    )
}