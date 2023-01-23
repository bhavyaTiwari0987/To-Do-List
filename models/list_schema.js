const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
                    description: {
                                        type: String,
                                        required:true
                    },
                    category: {
                                        type: String,
                                        required:true
                    },
                    date: {
                                        type: String,
                                        required: true
                    }
})
//we need to define in Model what would be name of a collection for this schema!!!
const List = mongoose.model('List', listSchema);
module.exports = List;