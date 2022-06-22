import React from 'react';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ItemListContainer({titulo}) {
    return (
        <>
        <div><p className="font text-center">{titulo}</p></div>
        <Container fluid>
            <Row md={4} className="p-3 bg-light rounded-3 justify-content-md-center">
                <Col>
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente" />
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <Button variant="primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente"/>
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <Button variant="primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente"/>
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <Button variant="primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente"/>
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <Button variant="primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}


export default ItemListContainer;