const express = require('express');
const router = express.Router();
module.exports = router;

const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);
router.get('/gallary', usersController.gallary);
