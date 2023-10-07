const {Router} = require('express');
const getRegiones = require('../controller/regiones.controller');


const router = Router();

router.get("/", getRegiones);


module.exports = router;