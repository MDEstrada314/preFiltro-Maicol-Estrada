const {Router} = require('express');
/* const {check} = require('express-validator') */
const {getPaises,postPaises,deletePaises,putPaises} = require('../controller/paises.controller');
/* const { validateDocument } = require('../middlewares/validate.documents.js'); */
const gandores = require('../models/ganadores.js');

const router = Router();

router.get("/", getPaises);
router.get("/", postPaises);
router.get("/:id", deletePaises);
router.get("/:id", putPaises);

module.exports = router;