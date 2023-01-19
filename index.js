const express = require('express');
const app = express();
const port = 8000;
//using expre.router
app.use('/', require('./routes'));
app.listen(port, function (err) {
                    if (err) {
                                        console.log(`Error is in running server ${err}`);
                                        return;
                    }
                    console.log(`Server is running perfectly fine ${port}`);
});