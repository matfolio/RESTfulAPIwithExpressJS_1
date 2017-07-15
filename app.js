var express = require('express')
var app = express()

var addUser = require('./addUser')
var findUser = require('./findUser')
var updateUser = require('./updateUser')
var deleteUser = require('./deleteUser')
var listAllUser = require('./listAllUser')

// this is our middleware.
// it would be executed first before anyother handler
// that could be invoked here.


app.use('/findUser', findUser)
app.use('/updateUser', updateUser)
app.use('/deleteUser', deleteUser)
app.use('/addUser', addUser)
app.use('/listAllUser', listAllUser)


app.listen(3000, function(){
	console.log("connected to the server");
});