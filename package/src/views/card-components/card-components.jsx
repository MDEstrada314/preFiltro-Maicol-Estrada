import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// Sections for this page
import BannerComponent from "./sections/bannercomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";

const CardNobel = () => {
    

    const [data, setData] = useState({});
    const apiUrl = 'http://localhost:9000/api/651c4f6d4cfab6af1b32f9b5'; 

    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error('Error al obtener datos de la API:', error);
        });
    }, [apiUrl]);

    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    {data.Nombre ? (
                        <BannerComponent
                            key={data._id}
                            title={data.Nombre}
                            bigrafia={data.biografia}
                            subtitle={data.frases[0]}
                            invesion={data.invencion}
                            backgroundImagen={data.imagen2}

                            buttonText="Texto del botón"
                        />
                    ) : (
                        <p>Cargando datos...</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

CardNobel.propTypes = {
  classes: PropTypes.object,
};

export default CardNobel;
