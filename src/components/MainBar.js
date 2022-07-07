import './MainBar.css';
//import Logo from '../assets/img/gestadata_icon.png';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

function MainBar() {
    return (
        <header>
        
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                <img
                    src={require('../assets/img/logo_tres.png')}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="LOGO"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="font">
                    <Nav className="me-auto" >
                        <Nav.Link><NavLink to='/Home'>Inicio</NavLink></Nav.Link>
                        <NavDropdown title='Desktop' id="basic-nav-dropdown" className="font">
                            <NavDropdown.Item className="font"><NavLink to="/TiendaTodos">Todos</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="font"><NavLink to="/Motherboards">Motherboards</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/Memorias">Memorias</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/Procesadores">Procesadores</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/PlacasVideo">Placas de Video</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/Almacenamiento">Almacenamiento</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><NavLink to="/Portatiles">Portatiles</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/Celulares">Celulares</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/Nosotros">Nosotros</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/Contacto">Contacto</NavLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cartProd"><CartWidget /></Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
        </header>
    );
}

export default MainBar;
