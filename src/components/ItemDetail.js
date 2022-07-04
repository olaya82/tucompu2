import { React, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ItemDetail (props, initial, onAdd, unit) {
    
    const productFetch = props.productFetch;
    const [units, setUnits] = useState(0);
    const [disableBtnPlus, setDisableBtnPlus] = useState(false);
    const [disableBtnLess, setDisableBtnLess] = useState(true);
    
    const addProduct = () => {
        setDisableBtnLess(false)
        if (units === (productFetch.stock-1)) {
            setDisableBtnPlus(true)
            
        }
        setUnits(units + 1)
    }

    const lessProduct = () => {
        setDisableBtnPlus(false)
        if(units === productFetch.initial) {
            setDisableBtnLess(true)
        }
        setUnits(units - 1)
    }

    console.log(props)

    return (
    <>
        <Card key={productFetch.id} className="text-center"style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../assets/img/${productFetch.imagen}`)} alt="imagen del componente" />
            <Card.Body>
                <Card.Title>{productFetch.titulo}</Card.Title>
                <Card.Text>{productFetch.descripcion}</Card.Text>
                <Card.Text>{productFetch.modelo}</Card.Text>
                <Card.Text>{productFetch.catalogo}</Card.Text>
                <Card.Text>{productFetch.marca}</Card.Text>
                <Card.Text>{productFetch.capacidad}</Card.Text>
                <Card.Text>{productFetch.tecnologia}</Card.Text>
                <Card.Text>{productFetch.velocidad}</Card.Text>
                <Card.Text>{productFetch.cantidad_modulos}</Card.Text>
                <Card.Text>{productFetch.tipo}</Card.Text>
                <Card.Text className="font-dark">${productFetch.precio}</Card.Text>
                <Container fluid>
                    <Row xs="auto" md="auto" className="rounded-3 justify-content-center">
                        <Col><Button variant="outline-primary" size="sm" onClick={lessProduct} disabled={disableBtnLess} > - </Button></Col>
                        <Col><p className="contador">{units}</p></Col>
                        <Col><Button variant="outline-primary" size="sm" onClick={addProduct} disabled={disableBtnPlus}> + </Button></Col>
                    </Row>
                </Container>
                    <div className="d-grid gap-2 col-12 mx-auto espacio">
                        <Button variant="outline-primary" disabled={productFetch.stock===1}>
                        <FontAwesomeIcon icon={faCartShopping}/> Agregar al Carrito
                        </Button>
                    </div>
                    <p className="stock">{productFetch.stock > 0 ? `Stock: ${productFetch.stock}` : `Sin Stock`}</p>
            </Card.Body>
        </Card>
    </>
    )
}

export default ItemDetail;