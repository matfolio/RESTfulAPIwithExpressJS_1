var express = require('express')
// instantiating the Router middle. essentially middleware composition
var router = express.Router()

var formatedDate = require('date-format');

// set matched user to false.
let match = false;

// would be set with the match object. 
let matchObject = "";

// array user information objects
let users = [
{
	id : 1,
	name : "mikko",
	age : 20,
	height: "80cm",
	profession: "trader"

},
{
	id : 2,
	name : "jenni",
	age : 25,
	height: "80cm",
	profession: "Accountant"

}

]
// Displays the time the request was made
// This would be executed first.
// Passes the execution phase to the next handle

let rquestDate = function requestDate(req, res, next) {
  console.log('You viewed the page at ' + formatedDate('hh:mm', new Date() ) + ' on ' + formatedDate('dd.MM.yy', new Date() ));
  next();
}

var addUser = function (name,age,height,profession){
	const length = (users.length + 1)
	users[length] = { "id": length, "name" : name, "age" : age, "height" : height,"profession" : profession }
	matchObject = users[length];
	match = true;
		
}


router.get('/:name/age/:age/height/:height/profession/:profession', rquestDate , function (req, res) {
	addUser(req.params.name,req.params.age,req.params.height,req.params.profession);
	if(match){
		console.log("user is found! ...");
		res.json(matchObject);
		match = false;
		
	}
	else {
		console.log("user not found! ...");
		res.send("user cannot be added")
	}
	
})

module.exports = router