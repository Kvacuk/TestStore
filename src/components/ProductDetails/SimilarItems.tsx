import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import { IProduct } from "../../interfaces/IProduct";
import { Col, Row } from "react-bootstrap";

export const SimilarItems = () => {
const products = useSelector((state:any)=> state.products);
const firstThreeProducts = products.slice(0,3);

    return (
      <div className="similarItems">
        <p>Similar Items</p>
        <Row>
          {firstThreeProducts.map((product: IProduct) => {
            return <Col key={product.id}><ProductCard product={product} /></Col>;
          })}
        </Row>
      </div>
    );
}
 
