import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redtolkit/reducer";
import { addToCart } from "./redtolkit/sliceCart";
import './products.css'
function Products() {
    const products = useSelector((state) => state.products);
    console.log(products);
    
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  return (
    <Container>
    <Row>
      {products.map((product) => (    
        <Col key={product.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" style={{height: "250px"}} src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {product.description}
              </Card.Text>
              <Card.Text>
              {product.price}$
              </Card.Text>
              <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
        )

    
      )}
    </Row>
  </Container>
  ) 

}
export default Products;
