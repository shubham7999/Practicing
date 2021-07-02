const express = require('express');
const router = express.Router();

const user_controller = require('../controller/user_controller');

router.get('/profile' , user_controller.profile);
router.get('/profile/o/p' , user_controller.profile);
router.get("/post" , user_controller.post);
console.log(user_controller.post , "user");
module.exports = router;


