import { useSelector } from "react-redux"
import { IProduct } from "../../../interfaces/IProduct";

type typeProps = {
    product: IProduct
}

export const RatePanel = (props: typeProps) => {
    const product = props.product;

    return (
        <div className="d-flex flex-column" >
            <p>{product?.title}</p>
            <p className="cardPrice">$ {product?.price}</p>

            
        </div>
    )
}