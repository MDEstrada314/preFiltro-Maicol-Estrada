
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import Buttons from "./sections/buttons.jsx";
import Labels from "./sections/labels.jsx";
import PagePagination from "./sections/pagination.jsx";
import Images from "./sections/images.jsx";
import Breadcrumbs from "./sections/breadcrumbs.jsx";
import Cards from "./sections/cards.jsx";
import Dropdowns from "./sections/dropdowns.jsx";
import PageForm from "./sections/form.jsx";
import PageTable from "./sections/table.jsx";
import Notification from "./sections/notification.jsx";
import TooltipPopover from "./sections/tooltip-popover.jsx";
import Typography from "./sections/typography.jsx";
import JsComponents from "./sections/js-components.jsx";
import CallToAction from "../../components/call-to-action/CallToAction"


const Components = () => {
    const [data, setData] = useState([]);
    const apiUrl = 'http://localhost:9000/api'; 

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
                    <HeaderBanner />
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <CallToAction
                                key={item._id}
                                backgroundImagen={item.imagen}
                                title={item.Nombre}
                                subtitle={item.frases[0]}
                                buttonText={item._id}
                            />
                        ))
                    ) : (
                        <p>Cargando datos...</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;





   {/*  <Buttons /> */}
                   {/*  <Labels /> */}
                    {/* <PagePagination /> */}
                  {/*   <Images /> */}
                   {/*  <Breadcrumbs /> */}
                   {/*  <Cards /> */}
                   {/*  <Dropdowns /> */}
                   {/*  <PageForm /> */}
                   {/*  <PageTable /> */}
                    {/* <Notification /> */}
                   {/*  <TooltipPopover /> */}
                 {/*    <Typography /> */}
                  {/*   <JsComponents /> */}