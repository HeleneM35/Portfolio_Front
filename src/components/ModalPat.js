import React from "react";
import { Button, Carousel, Modal } from 'react-bootstrap'
import salome from '../assets/images/salome.jpg'
import versailles from '../assets/images/versailles.jpg'
import levy from '../assets/images/levy.jpg'

const ModalPat = (props) => {

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Carousel>
                    <Carousel.Item>
                        <img
                        id='painting'
                        className="d-block"
                        src={salome}
                        alt="Peinture"
                        />
                        <Carousel.Caption>
                            <h3>Peinture</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        id='drawing'
                        className="d-block "
                        src={levy}
                        width={800}
                        height={450}
                        alt="Arts graphiques"
                        />
                        <Carousel.Caption>
                            <h3>Arts graphiques</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        id="architecture"
                        className="d-block"
                        src={versailles}
                        width={800}
                        height={450}
                        alt="Architecture"
                        />

                        <Carousel.Caption>
                            <h3>Architecture</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Modal>
       </>
    )
}

export default ModalPat;