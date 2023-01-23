const db = require('../config/mongoose');
const List = require('../models/list_schema');
module.exports.delete_task = function (id)  {
                    console.log("in the delete contact");
                    List.findByIdAndDelete(id, function (err) {
                                        if (err) {
                                                            console.log('error in deleting an object from database');
                                                            return;
                                        }

                                        return;
                    });

};