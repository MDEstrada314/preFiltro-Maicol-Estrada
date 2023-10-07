const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js')
const path = require ("path")

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MOONGO DB API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:9000"
            }
        ]
    },
    // Define todas tus rutas en el mismo arreglo 'apis'
    apis: [
        `${path.join(__dirname, "../controller/ganadores.controller.js")}`,
        `${path.join(__dirname, "../controller/paises.controller.js")}`,
        `${path.join(__dirname, "../controller/nobel.controller.js")}`,
        `${path.join(__dirname, "../controller/regiones.controller.js")}`,
        `${path.join(__dirname, "../controller/generos.js")}`
    ]
};

class Server{
    constructor(){
        this.app = express();
        this.app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
        this.port = process.env.PORT;
        this.auth = "/api";
        this.nobel="/nobel"
        this.pais ="/pais"
        this.region ="/region"
        this.genero ="/genero"
        //Conexion DB
        this.connectDB();
        //Middlewares
        this.middleware();
        //Routes
        this.routes();
    }

    async connectDB(){
        await dbConnection()
    }

    middleware(){
        //cors
        this.app.use(cors());
        //Leer y parsear un JSON en body
        this.app.use(express.json())
        //public directory
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.auth, require('../routers/ganadores.js'));
        this.app.use(this.nobel, require('../routers/nobel.js'));
        this.app.use(this.pais, require('../routers/paises.js'));
        this.app.use(this.region, require('../routers/regiones.js'));
        this.app.use(this.genero, require('../routers/generos.js'));
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Estamos en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;