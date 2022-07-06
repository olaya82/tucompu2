import './ItemCount.css'
import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';

function ItemCount({stock, initial, onAdd, unit}) {
    
    const [units, setUnits] = useState(1);
    const [disableBtnPlus, setDisableBtnPlus] = useState(false);
    const [disableBtnLess, setDisableBtnLess] = useState(true);
    
    const addProduct = () => {
        setDisableBtnLess(false)
        if (units === (stock-1)) {
            setDisableBtnPlus(true)
            
        }
        setUnits(units + 1)
    }

    const lessProduct = () => {
        setDisableBtnPlus(false)
        if(units === initial) {
            setDisableBtnLess(true)
        }
        setUnits(units - 1)
    }

    return (
        <>
            <Container fluid>
                <Row xs="auto" md="auto" className="rounded-3 justify-content-center">
                    <Col><Button variant="outline-primary" size="sm" onClick={lessProduct} disabled={disableBtnLess} > - </Button></Col>
                    <Col><p className="contador">{units}</p></Col>
                    <Col><Button variant="outline-primary" size="sm" onClick={addProduct} disabled={disableBtnPlus}> + </Button></Col>
                </Row>
            </Container>
        </>
    )
}
export default ItemCount;