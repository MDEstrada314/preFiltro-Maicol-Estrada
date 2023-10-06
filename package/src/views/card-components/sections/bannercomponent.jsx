/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

import Images from "../../../assets/images/landingpage/1.jpg"

const BannerComponent = ({title, bigrafia,invesion,backgroundImagen } ) => {
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        const loadBackgroundImage = async () => {
            try {
                const image = await import(`../../../assets/images/landingpage/${backgroundImagen}`);
                setBackgroundImage(`url(${image.default})`);
            } catch (error) {
                console.error('Error al cargar la imagen de fondo:', error);
            }
        };

        loadBackgroundImage();
    }, [backgroundImagen]);

    const backgroundImageStyle = {
        backgroundImage,
    };


    return (    
        <div>
            <div className="spacer">
               
            </div>  
            <div className="static-slider10" style={backgroundImageStyle}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="align-self-center text-center">
                            <span className="label label-rounded label-inverse">{invesion}</span>
                            <h1 className="title">{title}</h1>
                            <h6 className="subtitle op-8">{bigrafia}</h6>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20" data-toggle="collapse" href=""><span> Regresar <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );  
}

export default BannerComponent;
