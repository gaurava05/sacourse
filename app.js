var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Users = require('./models/users');
var seedDB = require('./seeds');
var pdf= require('html-pdf');
var ejs = require('ejs');
var path = require('path');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://krish:kanha123@cluster0-svhr0.mongodb.net/test?retryWrites=true&w=majority');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

//seedDB();

app.get('/',function(req,res){
	res.render('home1');
})

//Uploading the course page SA

app.get('/sa2020/course',function(req,res){
	res.render('course');
});

app.get('/users',function(req,res){
	Users.find({},function(err,foundUsers){
		if(err){
			console.log(err);
		}else{
			res.render('home',{users:foundUsers});
		}
	});
	
});

// app.get("/users/:id", (req, res) => {
	
// 	Users.findById(req.params.id,function(err,foundUser){
// 		if(err){
// 			console.log(err);
// 		}else{
			
// 			ejs.renderFile(path.join(__dirname,'./views/',"show.ejs"), {user:foundUser}, (err, data) => {
// 				if (err) {
// 					  res.send(err);
// 				} else {
// 					let options = {
// 						"height": "11.25in",
// 						"width": "8.5in",
// 						"header": {
// 							"height": "20mm"
// 						},
// 						"footer": {
// 							"height": "20mm",
// 						},
// 					};
// 					pdf.create(data, options).toFile("report.pdf", function (err, data) {
// 						if (err) {
// 							res.send(err);
// 						} else {
// 							res.send("File created successfully");
// 						}
// 					});
// 				}
		
// 			});
// 		}
    
// 	});
// });
app.get('/sa/verify/:id',function(req,res){
	Users.findById(req.params.id,function(err,foundUser){
		if(err){
			console.log(err);
		}else{
			
			res.render('show1',{user:foundUser});
		}
	});
});


app.listen(process.env.PORT,process.env.IP,function(){
	console.log("CAC on its way!!!");
});
