import React from "react";
import { Accordion, Button, Card, Container, Row } from 'react-bootstrap'
import ModalPat from './ModalPat'
import Playlist from './PlayList'
import './Interets.css'

const Interets = (props) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <h1 className='interetsTitle'>Mes centres d'intérêt</h1>
            <Container className="interetsCont">
                <Button className='interetsBtn' onClick={() => setModalShow(true)}>
                    Patrimoine
                </Button>
                <Row className='interetsRow'></Row>

                <Accordion>
                    <Accordion.Toggle as={Button} className='musiqueBtn' variant="link" eventKey="0">
                        Musique
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><Playlist /></Card.Body>
                    </Accordion.Collapse>
                </Accordion>
                <Row className='interetsRow'></Row>

                <Button className='interetsBtn' onClick={() => setModalShow(true)}>
                    Piano
                </Button>
                <Row className='interetsRow'></Row>

                <Button className='interetsBtn' onClick={() => setModalShow(true)}>
                    Voyages
                </Button>
                <Row className='interetsRow'></Row>

                <Button className='interetsBtn' onClick={() => setModalShow(true)}>
                    Romans, séries et films
                </Button>
            </Container>

            <ModalPat
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            
            
        </>   
    )
}

export default Interets;