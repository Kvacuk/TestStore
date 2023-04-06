import { useEffect } from "react";
import { fetchProductsAction } from "../Redux/actions/actions";
import { store } from "../Redux/store/store";
import { IProduct } from "../interfaces/IProduct";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Col, Row } from "react-bootstrap";

export const ProductsListsPage = () => {
  const products = store.getState().data;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
            .then(res=>res.json())
            .then(data=>store.dispatch(fetchProductsAction(data)));
  }, [])
    return (
      <>
        <div className="productsListPage">
          <div className="d-flex justify-content-between">
            <span>Shop The Latest</span>
            <Link to="#" className="viewAll">
              View All
            </Link>
          </div>
          <Row>
            {products.map((product) => {
              return (
                <Col>
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>

          {/* <ProductCard product={products[1]}/> */}
          {/* {
            products.map((product: IProduct) =>{
              return <h1 key={product.id}>{product.title}</h1>
            })
          } */}
        </div>
      </>
    );
}