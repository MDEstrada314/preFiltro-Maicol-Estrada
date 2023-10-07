const {Router} = require('express');
const getGeneros = require('../controller/generos.js')


const router = Router();

router.get("/", getGeneros);


module.exports = router;