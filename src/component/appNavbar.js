import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
    const carts =useSelector(state=>state.carts)

    return (
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
  
   <Link to="/" className='navbar-brand'>Cart-App</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>products</Link>
            <Link to="/cart" className='nav-link'>cart-{carts.length}</Link>
          
          </Nav>
        </Navbar.Collapse>
   
      </Container>
    </Navbar>
</>
    )
}
export default NavBar