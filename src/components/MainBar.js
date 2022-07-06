import './MainBar.css';
//import Logo from '../assets/img/gestadata_icon.png';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';

function MainBar() {
    return (
        <header>
        
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
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
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown" className="font">
                            <NavDropdown title="Componentes PC" id="basic-nav-dropdown" className="font">
                                <NavDropdown.Item href="#motherboard/3.1" className="font">Motherboard</NavDropdown.Item>
                                <NavDropdown.Item href="#memorias/3.2" className="font">Memorias</NavDropdown.Item>
                                <NavDropdown.Item href="#procesadores/3.3" className="font">Procesadores</NavDropdown.Item>
                                <NavDropdown.Item href="#placavideo/3.4" className="font">Placas de Video</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Item href="#Portatiles/3.5" className="font">Portatiles</NavDropdown.Item>
                            <NavDropdown.Item href="#Celulares/3.6" className="font">Celulares</NavDropdown.Item>
                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#acesorios/3.7">Accesorios/Otros</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
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
