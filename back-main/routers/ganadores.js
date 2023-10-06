const {Router} = require('express');
/* const {check} = require('express-validator') */
const {getInventores,postGanadores,putInventiores,deleteInventiores,getnobel} = require('../controller/ganadores.controller');
/* const { validateDocument } = require('../middlewares/validate.documents.js'); */
const gandores = require('../models/ganadores.js');

const router = Router();

router.get("/", getInventores);
router.get("/:id", getnobel);
router.post("/", postGanadores);
router.put("/:id", putInventiores);
router.delete("/:id", deleteInventiores);


module.exports = router;