import React from "react";
import './Projets.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Projets = () => {

    const onClick1 = () =>{
        window.open("https://chris356.github.io/WildJourney/index.html")
    }

    const onClick2 = () =>{
        window.open("https://memory-horror-game.netlify.app/")
    }

    const onClick3 = () =>{
        window.open("https://goofy-jones-6004d7.netlify.app/")
    }

    const onClickMotion = () => {
        window.open("https://www.youtube.com/watch?v=jTHL9Zv4XY4")
    }

    return (
        <>
            <h1 className='projetsBigTitle'>Mes projets</h1>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} className='colProjetsCont'>
                        <Card>
                            <Card.Header as="h4" className='headerProjets'>Projets de formation</Card.Header>
                            <Card.Body>
                                <Card.Title className='projetsTitle'>Wild Voyages</Card.Title>
                                <Card.Text className='projetsTxt'>
                                Projet 1 : réalisation d'un blog de voyage (1 semaine)
                                </Card.Text>
                                <Button className='btnProjets' onClick={onClick1}>Voir le projet</Button>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title className='projetsTitle'>Memory Horror Game</Card.Title>
                                <Card.Text className='projetsTxt'>
                                Projet 2 : réalisation d'un memory game avec React (1 mois)
                                </Card.Text>
                                <Button className='btnProjets' onClick={onClick2}>Voir le projet</Button>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title className='projetsTitle'>Travel from your couch!</Card.Title>
                                <Card.Text className='projetsTxt'>
                                Participation à un hackathon de 29 heures
                                </Card.Text>
                                <Button className='btnProjets' onClick={onClick3}>Voir le projet</Button>
                            </Card.Body>
                            <Card.Body>
                                <Card.Title className='projetsTitle'>Health travel</Card.Title>
                                <Card.Text className='projetsTxt'>
                                Participation à un hackathon de 48 heures en partenariat avec Doctolib
                                </Card.Text>
                                <Button className='btnProjets'>Voir le projet</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className='colProjetsCont2'>
                        <Card className='projetsCard2'>
                            <Card.Header as="h4" className='headerProjets'>Projets clients</Card.Header>
                            <Card.Body>
                                <Card.Title className='projetsTitle'>Storpe</Card.Title>
                                <Card.Text className='projetsTxt'>
                                Création d'une web app de paris sportifs entre amis (2 mois)
                                </Card.Text>
                                <Button className='btnProjets'>Voir le projet</Button>
                            </Card.Body>
                        </Card>
                        <Card className='projetsCard3'>
                            <Card.Header as="h4" className='headerProjets'>Autres projets</Card.Header>
                            <Card.Body>
                                <Card.Title className='projetsTitle'>Simplon, Apple et moi</Card.Title>
                                <Card.Text className='projetsTxt'>
                                    Un stop motion que j'ai réalisé pour postuler à la formation Apple de Simplon
                                </Card.Text>
                                <Button className='btnProjets' onClick={onClickMotion}>Voir le projet</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>   
    )
}

export default Projets;