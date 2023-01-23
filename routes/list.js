//basic things to set a router
const express = require('express');
const router = express.Router();
module.exports = router;

// home controller
const homeController = require('../controllers/list_home_controller');
router.get('/home', homeController.home);

// using add details controller
const add_details = require('../controllers/list_add_details_controller');
router.post('/add_details', add_details.add_details);

// using delete contact controller
const delete_task = require('../controllers/list_delete_task_controller');
// router.get('/delete_task/:id', delete_task.delete_task);
router.get('/delete_task/:id', function (req, res) {
                    let id = req.params.id;
                    delete_task.delete_task(id);
                    return res.redirect('back');
});



