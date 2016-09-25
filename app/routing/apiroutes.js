// Linking routes to a series of data sources.
 

var Friends = require('../data/friends.js');

// ROUTING

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page.
	 

	app.get('/api/friends', function(req, res){
		res.json(Friends);
	});

	// API POST Requests
	// user submits a form and it submits data to the server.

	app.post('/api/friends', function(req, res){

    var userData = req.body;
		var totalDifference = 0;
		var allDifferences = []; 

	//Loop through all of the stored friends 
	for (var i=0; i<(friends.length-1); i++){

		//Loop through all of question values and sum total their subtracted absolute values
		for (var j=0; j<10; j++){
			totalDifference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
		}

		allDifferences.push(totalDifference);
		totalDifference = 0;
	}

	//Best match will give the smallest values 
	var bestMatch = friends[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

	res.send(bestMatch);


	});
}