import { React } from 'react';
import Item from './Item';
import { Container, Row} from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ItemList({productos}) {
    
    return (
        <>
        <Container fluid>
            <Row xs="auto" md="auto" className="p-3 bg-light rounded-3 justify-content-center">
                    {productos.map((producto) => 
                        <Item titulo={producto.titulo}
                            descripcion={producto.descripcion}
                            catalogo={productos.catalogo}
                            imagen={producto.imagen} 
                            precio={producto.precio}
                            stock={producto.stock}
                        />
                    )}
                </Row>
        </Container>
        </>
    )
}

export default ItemList;