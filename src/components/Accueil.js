import React from "react";
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import photo_ordi from '../assets/images/photo_ordi.jpg'
import chateau from '../assets/images/chateau.jpg'
import './Accueil.css'


const Accueil = () => {

    return (
        <>
        <Container className='acPageCont'>
            <Jumbotron className='txtCont' fluid>
                <Container >
                    <h1 className='homeTitle'>Bienvenue sur mon portfolio !</h1>
                    <br/>
                    <p className='txtTitle'>
                        Passionnée de patrimoine et de digital, je vais bientôt allier les deux pendant mon stage chez 9b+ à Toulon.
                        <br/>
                        Je vous invite à découvrir mon profil et mes réalisations.
                    </p>
                </Container>
            </Jumbotron>
            <Container className='acCont' fluid='xs'>
                <Row >
                    <Col xs={2} className='d-sm-none'></Col>
                    <Col xs={8} sm={6} md={6} >
                        <div className='imgAccueil1'>
                            <Image className='photo_ordi' src={photo_ordi} rounded fluid />   
                        </div>
                    </Col>
                    <Col xs={2} className='d-sm-none'></Col>
                    <Col xs={2} className='d-sm-none'></Col>
                    <Col xs={8} sm={6} md={6} >
                        <div className='imgAccuei2'>
                            <Image className='chateau' src={chateau} rounded fluid />   
                        </div>
                    </Col>
                    <Col xs={2} className='d-sm-none'></Col>
                </Row>
            </Container>
        </Container>
        </>   
    )
}

export default Accueil;