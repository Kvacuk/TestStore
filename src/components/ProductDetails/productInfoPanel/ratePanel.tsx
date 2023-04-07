import { IProduct } from "../../../interfaces/IProduct";
import { RatingBar } from "./ratingBar";

type typeProps = {
    product: IProduct
}

export const RatePanel = (props: typeProps) => {
    const product = props.product;

    return (
        <div className="d-flex flex-column" >
            <p className="productInfoTitle">{product?.title}</p>
            <p className="cardPrice">$ {product?.price}</p>
            <RatingBar/>
            
        </div>
    )
}