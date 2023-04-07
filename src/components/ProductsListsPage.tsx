import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Col, Row } from "react-bootstrap";
import { fetchProductsAsync } from "../Redux/actions/actions";
import { IProduct } from "../interfaces/IProduct";
import { useDispatch, useSelector } from "react-redux";

export const ProductsListsPage = () => {
  const products = useSelector((state:any) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchProductsAsync())
  },[])
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
            {products.map((product: IProduct) => {
              return (
                <Col key={product.id}>
                  <ProductCard  product={product} />
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    );
}