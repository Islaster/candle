import getStripe from "../lib/getStripe";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../components/productArray";
import ProductCard from "../components/productCard";

export default function Home() {
  return (
    <>
      <h1 align="center" className="p-3">
        Choose your candles
      </h1>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col xs={1} sm={2} md={2} key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}
