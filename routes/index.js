const express = require('express');
const router = express.Router();
module.exports = router;


//accessing homeController
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);

//agar koi request users ke liye aayi to vo users.js me chali jaegi.. 
router.use('/users' , require('./users'));
router.use('/posts', require('./posts'));

//chekcing index.js router working or not
console.log("router is working");