const {Router} = require('express');
/* const {check} = require('express-validator') */
const getPaises = require('../controller/paises.controller');
/* const { validateDocument } = require('../middlewares/validate.documents.js'); */
const gandores = require('../models/ganadores.js');

const router = Router();

router.get("/", getPaises);

module.exports = router;