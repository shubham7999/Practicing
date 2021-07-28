const express = require('express');
const router = express.Router();

const user_controller = require('../controller/user_controller');

router.get('/profile' , user_controller.profile);
router.get('/sign-up' , user_controller.signup);
router.get("/sign-in" , user_controller.signin);
console.log(user_controller.signin , "user");
module.exports = router;


