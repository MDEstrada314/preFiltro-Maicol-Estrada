const {Router} = require('express');
const getNobels = require('../controller/nobel.controller.js');


const router = Router();

router.get("/", getNobels);


module.exports = router;