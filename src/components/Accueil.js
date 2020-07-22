import React from "react";
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import photo_ordi from '../assets/images/photo_ordi.jpg'
import chateau from '../assets/images/chateau.jpg'
import './Accueil.css'


const Accueil = () => {

    return (
        <>
            <Jumbotron className='txtCont' fluid>
                <Container >
                    <h1>Bienvenue sur mon portfolio !</h1>
                    <br/>
                    <p>
                        Je m'appelle Hélène Morel.
                        <br/>
                        Passionnée de patrimoine et de digital, je vais bientôt allier les deux pendant mon stage chez 9b+.
                    </p>
                </Container>
            </Jumbotron>
            <Container className='acCont' fluid='xs'>
                <Row >
                    <Col xs={12} sm={6} md={6} >
                        <div className='colAccueil'>
                            <Image className='photo_ordi' src={photo_ordi} rounded fluid />   
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} >
                        <div className='colAccueil'>
                            <Image className='photo_ordi' src={chateau} rounded fluid />   
                        </div>
                    </Col>
                </Row>

            </Container>
        </>   
    )
}

export default Accueil;