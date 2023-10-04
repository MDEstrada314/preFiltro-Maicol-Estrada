import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

import Images from "../../assets/images/landingpage/comingsoon.jpg";

const CallToAction = ({ title, subtitle }) => {
    const [backgroundImage, setBackgroundImage] = useState(Images);

    useEffect(() => {
        // Simular una llamada a la API para obtener la URL de la imagen.
        // Reemplaza esto con la lógica real para obtener la URL.
        setTimeout(() => {
            const imageUrl = '../../assets/images/landingpage/comingsoon.jpg';
            setBackgroundImage(imageUrl);
        }, 1000); // Simula un retardo de 1 segundo para obtener la URL.
    }, []);

    return (
        <div className="coming-soon" id="coming" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container className="py-5 mt-5"  >
                <Row>
                    <Col md="6">
                        <div className="d-flex align-items-center" >
                            <div>
                                <h2 className="title text-white font-weight-bold">{title}</h2>
                                <h6 className="subtitle font-light text-white">{subtitle}</h6>
                                <Link to="/#coming" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">
                                    Detalles
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CallToAction;
