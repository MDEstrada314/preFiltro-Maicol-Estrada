const {Router} = require('express');
const {getNobels,postNobels,deleteNobels,putNobels} = require('../controller/nobel.controller');


const router = Router();

router.get("/", getNobels);
router.get("/", postNobels);
router.get("/:id", deleteNobels);
router.get("/:id", putNobels);


module.exports = router;