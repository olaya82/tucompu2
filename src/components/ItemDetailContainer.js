import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';

function ItemDetailContainer (props) {
    
    const [productFetch, setProductFetch] = useState([])
    
    useEffect (() => {
        setTimeout(() => {
            fetch('productos.json', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })    
                .then(resp => resp.json())
                .then(productos => setProductFetch(productos.filter( i => i.id === 1)))
        }, 3000)
    },);

    console.log(productFetch)

    return (
        <>
            <Container fluid>
                <Row xs="auto" md="auto" className="p-3 bg-light rounded-3 justify-content-center">
                    <Col xs="auto" md="auto">
                        {/* 
                            <ItemDetail productDetail={productFetch}/>
                            {productFetch && <ItemDetail productDetail={productFetch} />}
                        */} 
                        {productFetch.length && <ItemDetail productDetail={productFetch} />}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default ItemDetailContainer;