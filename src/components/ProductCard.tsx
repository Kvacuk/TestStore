import { Card } from "react-bootstrap";
import { IProduct } from "../interfaces/IProduct"
import { Link } from "react-router-dom";

type typeProps ={
    product: IProduct
} 


export const ProductCard = (props : typeProps) => {

    const product = props.product;    

    return (
      <>
          <Card
            className="productCard"
            border="0"
          >
            <Link to={`/${product.id}`} onClick={()=>window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title className="cardTitle">{product.title}</Card.Title>
                <p className="cardPrice">$ {product.price}</p>
              </Card.Body>
            </Link>
          </Card>
      </>
    );
}