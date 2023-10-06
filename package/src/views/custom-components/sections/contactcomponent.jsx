import React, { useState } from "react";
import axios from "axios";
import { Routes, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = () => {
  const margin = {
    marginTop: "10rem",
  };
  let navigate = useNavigate();
  const [Nombre, setFisrsName] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [pais, setPais] = useState("");
  const [invencion, setInvencion] = useState("");
  const [frases, setFrases] = useState("");
  const [genero, setGenero] = useState("");
  const [biografia, setbiografia] = useState("");

  const postApiData = () => {
    axios.post(`http://localhost:9000/api`, {
      Nombre,
      fechaNacimiento,
      pais,
      invencion,
      frases,
      genero,
      biografia,
    })
    .then(() => {
      navigate("/");
    })
    .catch(error => {
      console.error("Error en la solicitud:", error);
    });
  };



  return (
    <div>
      <div className="spacer bg-light" style={margin} >
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Agregar Nuevo Ganador</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Container>
          <Row>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Nuevo Ganador</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Nombre" 
                              onChange={(e) => setFisrsName(e.target.value)}
                            />
                          </FormGroup>  
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="fecha Nacimiento"
                                 onChange={(e) => setfechaNacimiento(e.target.value)} />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Pais"
                             onChange={(e) => setPais(e.target.value)} />
                           
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="invencion"
                               onChange={(e) => setInvencion(e.target.value)}/>
                         
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Fraces"
                             onChange={(e) => setFrases(e.target.value)}
                            
                            />
                           
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="Genero"
                             onChange={(e) => setGenero(e.target.value)}/>
                           
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="Biografia"
                              onChange={(e) => setbiografia(e.target.value)}

                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                            onClick={postApiData}
                          >
                            <span>
                              {" "}
                              SUBMIT <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">Wrappixel Headquarters</h2>
                    <p className="text-white m-t-30 op-8">
                      251 546 9442
                      <br /> info@wrappixel.com
                    </p>
                    <p className="text-white op-8">
                      601 Sherwood Ave.
                      <br /> San Bernandino, CA 92404
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactComponent;
