const express = require('express');
const router = express.Router();
module.exports = router;


//accessing homeController
const homeController = require('../controllers/home_Controller');
router.get('/', homeController.home);

//for all the request starting with /list 
router.use('/list', require('./list'));

//chekcing index.js router working or not
console.log("router is working");