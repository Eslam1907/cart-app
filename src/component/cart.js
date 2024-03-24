import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "./redtolkit/sliceCart";

function Cart() {
    const dispatch = useDispatch()
  const carts = useSelector((state) => state.carts);
  console.log(carts);
const totalPrice = carts.reduce((acc,product)=>{
    return acc+=product.price*product.quan
},0)
Math.floor(totalPrice)
  return (
    <Container className="py-3">
      <h2>Wolcome to your cart</h2>
      <Button variant="primary" className="mb-3" onClick={()=>dispatch(clear())}>Clear cart</Button>
       
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>price</th>
            <th>count</th>
            <th>image</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td>{product.quan}</td>
              <td> <Image src= {product.image} alt={product.title} style={{width:"100px",height:"100px"}} /> </td>
              <td>
                <Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>the total price: {totalPrice}$</h2>
    </Container>
  );
}
export default Cart;
