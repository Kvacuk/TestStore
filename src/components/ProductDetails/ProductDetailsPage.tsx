import { useEffect } from "react"
import { fetchProductAsync } from "../../Redux/actions/actions";
import { useParams } from "react-router-dom";
import { ImageDetial } from "./ImageDetail";
import { useDispatch, useSelector } from "react-redux";
import { ProductInfo } from "./productInfoPanel";
import { DetailTabs } from "./DetailTabs";
import { SimilarItems } from "./SimilarItems";

export const ProductDetailPage =() => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state: any) =>state.product);

    useEffect(() => {
          if(id !== undefined) {
            dispatch(fetchProductAsync(parseInt(id)));
          }
      }, [id, dispatch]);

    return (
      <div>
        <div className="productDetails">
          <ImageDetial imgPath={product?.image} />
          <ProductInfo product={product} />
        </div>
        <DetailTabs product={product}/>
        <SimilarItems/>
      </div>
    );
}