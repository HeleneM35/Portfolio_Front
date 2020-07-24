import React from "react";
import { Button, Container, Row } from 'react-bootstrap'
import ModalPat from './ModalPat'
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
                
                <Button className='interetsBtn' onClick={() => setModalShow(true)}>
                    Musique
                </Button>
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