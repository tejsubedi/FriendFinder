var express = require('express');
var path = require('path');

//Setting express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle the data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
});