var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Setting express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle the data parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
});