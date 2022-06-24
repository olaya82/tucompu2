import './ItemCount.css'
import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';

function ItemCount({stock, initial, onAdd}) {
    
    const [unidades, setUnidades] = useState(initial);
    const [disableBotonMas, setDisableBotonMas] = useState(false);
    const [disableBotonMenos, setDisableBotonMenos] = useState(true);
    
    const sumar = () => {
        setDisableBotonMenos(false)
        if (unidades === (stock-1)) {
            setDisableBotonMas(true)
        }
        setUnidades(unidades + 1)
    }

    const restar = () => {
        setDisableBotonMas(false)
        if(unidades === initial) {
            setDisableBotonMenos(true)

        }
        setUnidades(unidades - 1)
    }

    return (
        <>
            <Container fluid>
                <Row xs="auto" md="auto" className="rounded-3 justify-content-center">
                    <Col><Button variant="outline-primary" size="sm" onClick={sumar} disabled={disableBotonMas}> + </Button></Col>
                    <Col><p className="contador">{unidades}</p></Col>
                    <Col><Button variant="outline-primary" size="sm" onClick={restar} disabled={disableBotonMenos} > - </Button></Col>
                </Row>
            </Container>
        </>
    )
}
export default ItemCount;