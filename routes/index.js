const express = require('express');
const router = express.Router();
const homecontroller = require('../controller/homecontroller');
console.log("route");

router.get('/' , homecontroller.home);
router.use('/user' , require("./user"));

//for further routes access from here

// router.use('route' , require(./filename));

module.exports = router;