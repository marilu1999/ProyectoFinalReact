import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategories} from '../../hooks/useProducts';

const NavBar = () => {

 const {categories} = useGetCategories ();

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{backgroundColor: 'pink'}}>
          <Link to='/'>Decompritas👗</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {
                categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index} ><Link key={index} to={`/category/${category}`}>{category}</Link> </NavDropdown.Item>
                  )
                })
              }
               </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
          <Link to="/create-product">Crear Producto</Link>
          <CartWidget />
        </Container>
      </Navbar> 
    );
  };
  
  export default NavBar;
  
