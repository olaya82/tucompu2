import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Col, Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';

function Item ({ id, imagen, titulo, descripcion, precio, stock }) {
    
    return (
    <>
        <Col xs="auto" md="auto">
            <Card key={id} className="text-center"style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../assets/img/${imagen}`)} alt="imagen del componente" />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text className="font-dark">${precio}</Card.Text>
                    <ItemCount stock={stock} initial={1}/>
                        <div className="d-grid gap-2 col-12 mx-auto espacio">
                            <Button variant="outline-primary" disabled={stock}>
                                <FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                        </div>
                        <p className="stock">{stock > 0 ? `Stock: ${stock}` : `Sin Stock`}</p>
                    </Card.Body>
            </Card>
        </Col>
    </>
    )
}

export default Item;