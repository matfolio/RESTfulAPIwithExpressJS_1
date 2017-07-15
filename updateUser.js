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

var updateName = function (id,name){
	users.map(function(user){
		if(id == user.id){
			user.name = name;
			//user.age = age;
			//user.height = height;
			//user.profession = profession;
			matchObject = user;
			match = true;
		}
	})
}
var updateNameAge = function (id,name,age){
	users.map(function(user){
		if(id == user.id){
			user.name = name;
			user.age = age;
			//user.height = height;
			//user.profession = profession;
			matchObject = user;
			match = true;
		}
	})
}
var updateNameAgeHeight = function (id,name,age,height){
	users.map(function(user){
		if(id == user.id){
			user.name = name;
			user.age = age;
			user.height = height;
			//user.profession = profession;
			matchObject = user;
			match = true;
		}
	})
}
var updateNameAgeHeightProfession = function (id,name,age,height,profession){
	users.map(function(user){
		if(id == user.id){
			user.name = name;
			user.age = age;
			user.height = height;
			user.profession = profession;
			matchObject = user;
			match = true;
		}
	})
}

// Handler on the 
router.get('/:id/name/:name', rquestDate , function (req, res) {
	updateName(req.params.id,req.params.name/*,req.params.age,req.params.height,req.params.profession*/);
	if(match){
		console.log("user is found! ...");
		res.json(matchObject);
		match = false;
		
	}
	else {
		console.log("user not found! ...");
		res.send("user with Id: " + req.params.id +  "not found! ...")
	}
	
})
router.get('/:id/name/:name/age/:age', rquestDate , function (req, res) {
	updateNameAge(req.params.id,req.params.name,req.params.age);
	if(match){
		console.log("user is found! ...");
		res.json(matchObject);
		match = false;
		
	}
	else {
		console.log("user not found! ...");
		res.send("user with Id: " + req.params.id +  "not found! ...")
	}
	
})

router.get('/:id/name/:name/age/:age/height/:height', rquestDate , function (req, res) {
	updateNameAgeHeight(req.params.id,req.params.name,req.params.age,req.params.height);
	if(match){
		console.log("user is found! ...");
		res.json(matchObject);
		match = false;
		
	}
	else {
		console.log("user not found! ...");
		res.send("user with Id: " + req.params.id +  "not found! ...")
	}
	
})

router.get('/:id/name/:name/age/:age/height/:height/profession/:profession', rquestDate , function (req, res) {
	updateNameAgeHeightProfession(req.params.id,req.params.name,req.params.age,req.params.height,req.params.profession);
	if(match){
		console.log("user is found! ...");
		res.json(matchObject);
		match = false;
		
	}
	else {
		console.log("user not found! ...");
		res.send("user with Id: " + req.params.id +  "not found! ...")
	}
	
})

module.exports = router