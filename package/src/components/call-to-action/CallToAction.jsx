import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


const CallToAction = ({ backgroundImagen, title, subtitle, llaves }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    console.log(llaves);

    function llave(){
        localStorage.setItem('ID',llaves)
    
    }




    useEffect(() => {
        const loadBackgroundImage = async () => {
            try {
                const image = await import(`../../assets/images/landingpage/${backgroundImagen}`);
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
        <div className="coming-soon" id="coming" style={backgroundImageStyle}>
            <Container className="py-5 mt-5">
                <Row>
                    <Col md="6">
                        <div className="d-flex align-items-center">
                            <div>
                                <h2 className="title text-white font-weight-bold">{title}</h2>
                                <h6 className="subtitle font-light text-white">{subtitle}</h6>
                                <Link to="/card-components" onClick={()=>{llave()}}  className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">
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


