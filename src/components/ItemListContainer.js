import { React } from 'react';
import './ItemListContainer.css'
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ItemCount from './ItemCount';

function ItemListContainer({titulo, stock}) {
    
    return (
        <>
        
        <div><p className="font text-center">{titulo}</p></div>
        <Container fluid>
            <Row xs="auto" md="auto" className="p-3 bg-light rounded-3 justify-content-center">
                <Col xs="auto" md="auto">
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente" />
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <ItemCount stock={5} initial={1}/>
                            <div className="d-grid gap-2 col-12 mx-auto espacio">
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                            </div>
                            <p className="stock"> { stock > 0 ? `Stock: ${stock}` : `Sin Stock`}</p>
                            </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto" md="auto">
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente" />
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <ItemCount stock={5} initial={1}/>
                            <div className="d-grid gap-2 col-12 mx-auto espacio">
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                            </div>
                            <p className="stock"> { stock > 0 ? `Stock: ${stock}` : `Sin Stock`}</p>
                            </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto" md="auto">
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente" />
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <ItemCount stock={5} initial={1}/>
                            <div className="d-grid gap-2 col-12 mx-auto espacio">
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                            </div>
                            <p className="stock"> { stock > 0 ? `Stock: ${stock}` : `Sin Stock`}</p>
                            </Card.Body>
                    </Card>
                </Col>
                <Col xs="auto" md="auto">
                    <Card className="text-center"style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../assets/img/memoria_ram.jpg')} alt="imagen del componente" />
                        <Card.Body>
                            <Card.Title>Memoria 16Gb DDR4</Card.Title>
                            <Card.Text>
                                Memoria Udimm Adata Xpg Gammix D20 Ddr4 16Gb 3200Mhz Black Blister (Ax4U320016G16A-Ctg20).
                            </Card.Text>
                            <Card.Text className="font-dark">$30.000</Card.Text>
                            <ItemCount stock={5} initial={1}/>
                            <div className="d-grid gap-2 col-12 mx-auto espacio">
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faCartShopping}/> Agregar </Button>
                            </div>
                            <p className="stock"> { stock > 0 ? `Stock: ${stock}` : `Sin Stock`}</p>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}


export default ItemListContainer;