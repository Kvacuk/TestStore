import { useEffect, useState } from "react";
import { store } from "../Redux/store/store";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Col, Row } from "react-bootstrap";
import { fetchProductsAsync } from "../Redux/actions/actions";
import { IProduct } from "../interfaces/IProduct";

export const ProductsListsPage = () => {
  const [products, setProducts] = useState<IProduct[]>(store.getState().data)

  useEffect(() => {
      store.dispatch(fetchProductsAsync())
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
                <Col >
                  <ProductCard key={product.id} product={product} />
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    );
}