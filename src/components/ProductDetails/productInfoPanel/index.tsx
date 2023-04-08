import { IProduct } from "../../../interfaces/IProduct"
import { AddToCartBar } from "./addToCartBar"
import { IconsBar } from "./iconsBar"
import { RatePanel } from "./ratePanel"

type typeProps={
    product: IProduct
}

export const ProductInfo = (props: typeProps) => {
    return(
        <div className="productInfo">
            <RatePanel product={props.product} />
            <AddToCartBar />
            <IconsBar/>
        </div>
    )
} 