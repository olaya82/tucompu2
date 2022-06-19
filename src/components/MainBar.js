import './MainBar.css';
//import Logo from '../assets/img/gestadata_icon.png';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

function MainBar() {
    return (
        <header>
        
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={require('../assets/img/logo_uno.png')}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="LOGO"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="#portatiles">Portatiles</Nav.Link>
                        <Nav.Link href="#celulares">Celulares/Tablets</Nav.Link>
                            <NavDropdown title="Componentes PC" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Motherboard</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Memorias</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Microprocesadores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Placas de Video</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">Accesorios/Otros</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#tienda">Tienda</Nav.Link>
                            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
}

export default MainBar;
