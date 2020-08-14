var mongoose = require('mongoose');
var Users = require('./models/users');
var data = require('./Final2.json');

function seedDB(){
	data.forEach(function(seed){
		Users.create(seed,function(err,user){
			if(err){
				console.log(err);
			}else{
				console.log('User added');
				user.save();
			}
		});
	});
}

// function seedDB(){
// 	Users.remove({},function(err){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log('All Users removed');
// 		}
// 	});
// }

module.exports = seedDB;