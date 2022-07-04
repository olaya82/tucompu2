import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Col, Card, Button } from 'react-bootstrap';

function Item (props) {
    
    return (
    <>
        <Col xs="auto" md="auto">
            <Card id={props.id} className="text-center"style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../assets/img/${props.imagen}`)} alt="imagen del componente" />
                <Card.Body>
                    <Card.Title>{props.titulo}</Card.Title>
                    <Card.Text>{props.descripcion}</Card.Text>
                    <Card.Text className="font-dark">${props.precio}</Card.Text>
                        <div className="d-grid gap-2 col-12 mx-auto espacio">
                            <Button variant="outline-primary">
                                <FontAwesomeIcon icon={faEye} /> Ver detalles
                            </Button>
                            
                        </div>
                        <p className="stock">{props.stock > 0 ? `Stock: ${props.stock}` : `Sin Stock`}</p>
                </Card.Body>
            </Card>
        </Col>
    </>
    );
}

export default Item;