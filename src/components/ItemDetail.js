import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';

function ItemDetail (props, initial, onAdd, unit) {
    
    const productFetch = props.productDetail[0];
    
    return (
    <>
        <Card className="text-center"style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../assets/img/${productFetch.imagen}`)} alt="imagen del componente" />
            <Card.Body>
                <Card.Title>{productFetch.titulo}</Card.Title>
                <Card.Text><strong>Descripción: </strong>{productFetch.descripcion}</Card.Text>
                <Card.Text><strong>Modelo: </strong>{productFetch.modelo}</Card.Text>
                <Card.Text><strong>Catalogo: </strong>{productFetch.catalogo}</Card.Text>
                <Card.Text><strong>Marca: </strong>{productFetch.marca}</Card.Text>
                <Card.Text><strong>Capacidad: </strong>{productFetch.capacidad}</Card.Text>
                <Card.Text><strong>Tecnologia: </strong>{productFetch.tecnologia}</Card.Text>
                <Card.Text><strong>Bus: </strong>{productFetch.velocidad}</Card.Text>
                <Card.Text><strong>Cantidad de modulos: </strong>{productFetch.cantidad_modulos}</Card.Text>
                <Card.Text><strong>Tipo: </strong>{productFetch.tipo}</Card.Text>
                <Card.Text className="font-dark">${productFetch.precio}</Card.Text>
                    <ItemCount/>
                    <div className="d-grid gap-2 col-12 mx-auto espacio">
                        <Button variant="outline-primary" disabled={productFetch.stock===0}>
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