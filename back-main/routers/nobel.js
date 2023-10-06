const {Router} = require('express');
const getNobels = require('../controller/nobel.controller');


const router = Router();

router.get("/", getNobels);


module.exports = router;