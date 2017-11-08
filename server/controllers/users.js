let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');
let session = require('express-session');

module.exports = {
	register: (req,res)=>{
		console.log("users.register");
		User.findOne({email: req.body.email}).exec((err,foundUser)=>{
			if (err){
				console.log("error in register");
			} else {
				if (!foundUser){
					let newUser = new User(req.body);
					let hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
					newUser.password = hashedPW;
					newUser.save((err)=>{
						err ? (
							console.log("something went wrong registering"),
							res.json(err)
						) :(
							console.log("registered!"),
							req.session.userId = newUser._id,
							res.json(newUser)
						);
					})
				}
			}
		})
	},
	login: (req,res)=>{
		console.log("users.login");
		User.findOne({email: req.body.email}).exec((err, foundUser)=>{
			if (err){
				console.log("error in login");
				res.json(err);
			} else {
				console.log("no error");
				if (foundUser){
					console.log("foundUser")
					if (bcrypt.compareSync(req.body.password, foundUser.password)== true){
						console.log("passwords matched");
						req.session.userId = foundUser._id;
						res.json(true);
					} else {
						console.log("passwords didnt match");
						res.json({
							errors: {
								login: {message: "incorrect email or password combination"}
							}
						});
					}
				} else {
					res.json({
						errors: {
							login: {message: " Incorrect email or password combination"}
						}
					});
				}
			}
		})
	},
}
