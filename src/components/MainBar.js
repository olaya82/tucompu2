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
                            <NavDropdown.Item className="font"><NavLink to="/productos">Todos</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="font"><NavLink to="/productos/Motherboards">Motherboards</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/productos/Memorias">Memorias</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/productos/Procesadores">Procesadores</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/productos/Placas de video">Placas de Video</NavLink></NavDropdown.Item>
                            <NavDropdown.Item className="font"><NavLink to="/productos/Almacenamiento">Almacenamiento</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><NavLink to="/productos/Portatiles">Portatiles</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/celulares">Celulares</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/nosotros">Nosotros</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/contacto">Contacto</NavLink></Nav.Link>
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
