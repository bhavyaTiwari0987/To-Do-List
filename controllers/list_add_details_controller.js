const db = require('../config/mongoose');
const List = require('../models/list_schema');
module.exports.add_details = function (req, res) {
                    List.create({
                                        description: req.body.description,
                                        category: req.body.category,
                                        date: req.body.date
                                        
                    }, function (err, newList) {
                                        if (err) {
                                                            console.log('error in creating a contact!!');
                                                            return;
                                        }
                                        console.log('*********', newList);
                                        return res.redirect('back');
                    });
}