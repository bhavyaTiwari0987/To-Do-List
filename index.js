//using express and defining port
const express = require('express');
const app = express();
const port = 7000;
//for middleware
app.use(express.urlencoded());
//using express router
app.use('/', require('./routes'));
//using database
const db = require('./config/mongoose');

//setting ejs template engine
app.set('view engine' , 'ejs');
app.set('views', './views');
//setting assets
app.use(express.static('assets'));


app.listen(port, function (err) {
                    if (err) {
                                        console.log(`Error is in running server ${err}`);
                                        return;
                    }
                    console.log(`Server is running perfectly fine ${port}`);
});