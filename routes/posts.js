const express = require('express');
const router = express.Router();
module.exports = router;

const postsController = require('../controllers/posts_controllers');
router.get('/post1', postsController.post);