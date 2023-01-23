const List = require('../models/list_schema');
module.exports.home = function (req, res) {
                    List.find({}, function (err, list) {
                                        if (err) {
                                                            console.log('Error in fetching list from db');
                                                            return;
                                        }

                                        return res.render('list_home', {
                                                            title: 'to-do-list',
                                                            listInDb : list
                                        });
                    });
};






                    