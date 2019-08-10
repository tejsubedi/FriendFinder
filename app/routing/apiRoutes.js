var path = require('path');
var friends = require('../data/friends');

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        return res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var newFriend = req.body;
        friends.push(newFriend);
        return res.json(friends);
        // var score = newFriend.scores;
        // var pos = compareScore(score);


        // return res.json(friends[pos]);
    })
}

// function compareScore(score){
//     var score = score;
//     console.log("New friend score" + score);

//     var userScore = 0;
//     var compScore = [];

//     for (var i= 0; i < friends.length -1; i++){
//         var 
//     }
// }

