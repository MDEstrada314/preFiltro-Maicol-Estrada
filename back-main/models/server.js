const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js')
const path = require ("path")

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swgaerSpec = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"MOONGO DB API",
            version:"1.0.0"
        },
        servers:[
            {
                url:"http://localhost:9000"
            }
        ]
    },
    apis:[`${path.join(__dirname,"../controller/ganadores.controller.js")}`]
}

class Server{
    constructor(){
        this.app = express();
        this.app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swgaerSpec)));
        this.port = process.env.PORT;
        this.auth = "/api";
        this.nobel="/nobel"
        this.pais ="/pais"
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
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Estamos en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;