import React from "react";
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Curriculum.css'

const Curriculum = () => {

    return (
        <>
            <h1 className='cvBigTitle'>Mon CV</h1>
            <Container fluid className='cvCont'>
                <Row>
                    <Col xs={12} className='colCvCard'>
                        <Card>
                            <Card.Header as="h4" className='headerCv'>Mes compétences</Card.Header>
                            <Card.Body className='bodySkills'>
                                <Card.Title className='skills'>Coordonner des équipes</Card.Title>
                                <Card.Title className='skills'>Planifier et suivre les opérations</Card.Title>
                                <Card.Title className='skills'>Analyser les besoins du client</Card.Title>
                                <Card.Title className='skills'>Rédiger un cahier des charges</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='rowCvCard'>
                    <Col xs={12} md={6} className='colCvCard2'>
                        <Card className='cvCard'>
                            <Card.Header as="h4" className='headerCv'>Ma formation</Card.Header>
                            <Card.Body className='bodyCv2'>
                                <Card.Title className='cvTitle'>Wild Code School, Marseille | 2020</Card.Title>
                                    <Card.Text className='cvTxt'>
                                    Préparation au titre RNCP Développement web et web mobile (bac +2)
                                    </Card.Text>
                                <Card.Title className='cvTitle'>Simplon.co, Marseille | 2020</Card.Title>
                                    <Card.Text className='cvTxt'>
                                    Apple Foundation Program : initiation au développement d’une application mobile iOS par l’apprentissage du langage Swift
                                    </Card.Text>
                                <Card.Title className='cvTitle'>Ecole du Louvre, Paris | 2005</Card.Title>
                                    <Card.Text className='cvTxt'>
                                    Diplôme de muséologie
                                    </Card.Text>
                                <Card.Title className='cvTitle'>Université Bordeaux Montaigne | 2003</Card.Title>
                                    <Card.Text className='cvTxt'>
                                    D.E.S.S. Patrimoine monumental et mobilier 
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className='colCvCard3'>
                        <Card className='cvCard'>
                            <Card.Header as="h4" className='headerCv'>Mes expériences</Card.Header>
                            <Card.Body className='bodyCv3'>
                                <Card.Title className='cvTitle'>Scrum master et développeuse sur un projet client de paris entre amis : Storpe</Card.Title>
                                    <Card.Text className='cvTxt'>
                                    Wild Code School, Marseille | 2020
                                    </Card.Text>
                                <Card.Title className='cvTitle'>
                                    Assistante chef de projet restaurations et base de données
                                    <br/>
                                    Responsable du pôle scientifique par intérim
                                </Card.Title>
                                    <Card.Text className='cvTxt'>
                                    CICRP, Marseille | 2014-2015, 2016-2018
                                    </Card.Text>
                                    
                                <Card.Title className='cvTitle'>Assistante chef de projet "Grand musée" et chantier des collections</Card.Title>
                                    <Card.Text className='cvTxt'>
                                    Musée de la Légion étrangère, Aubagne | 2010-2018
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>   
    )
}

export default Curriculum;

