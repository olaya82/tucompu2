import './ItemCount.css'
import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';

function ItemCount({stock, initial, onAdd, unit}) {
    
    const [units, setUnidades] = useState(initial);
    const [disableBtnPlus, setDisableBtnPlus] = useState(false);
    const [disableBtnLess, setDisableBtnLess] = useState(true);
    
    const sumar = () => {
        setDisableBtnLess(false)
        if (units === (stock-1)) {
            setDisableBtnPlus(true)
            
        }
        setUnidades(units + 1)
    }

    const restar = () => {
        setDisableBtnPlus(false)
        if(units === initial) {
            setDisableBtnLess(true)
        }
        setUnidades(units - 1)
    }

    return (
        <>
            <Container fluid>
                <Row xs="auto" md="auto" className="rounded-3 justify-content-center">
                    <Col><Button variant="outline-primary" size="sm" onClick={restar} disabled={disableBtnLess} > - </Button></Col>
                    <Col><p className="contador">{units}</p></Col>
                    <Col><Button variant="outline-primary" size="sm" onClick={sumar} disabled={disableBtnPlus}> + </Button></Col>
                </Row>
            </Container>
        </>
    )
}
export default ItemCount;