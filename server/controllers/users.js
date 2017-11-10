let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');
let session = require('express-session');

module.exports = {
	register: (req,res)=>{
		console.log("users.register");
		User.findOne({email: req.body.email}).exec((err,newUser)=>{
			if (err){
				console.log("error in register");
				res.json({
					errors: {
						login: {message: "email is already in use"}
					}
				});
			} else {
				if (!newUser){
					let newUser = new User(req.body);
					let hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
					newUser.password = hashedPW;
					newUser.save((err)=>{
						err ? (
							console.log("something went wrong registering"),
							res.json(err)
						) : (
							console.log("registered!"),
							req.session.userId = newUser._id,
							res.json({_id: newUser._id})
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
						res.json({_id: foundUser._id});
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

	logout: (req,res)=>{
		console.log("users.logout");
		req.session.destroy();
		res.json(true);
	},

	admin: (req,res)=>{
		console.log("admin user")
		if (!req.session.userId){
			res.json(false)
		} else {
			User.findOne({admin:true}).exec((err,foundUser)=>{
				err ? (
					res.json(false)
				) :(
					console.log("current user"),
					res.json(foundUser)
				)
			}
		}
	},

	allusers: (req,res)=>{
		console.log("all users");
		User.find().exec((err, userList)=>{
			err ? (
				console.log('error in all users', err),
				res.json(err)
			) : (
				console.log("got all the users"),
				res.json(userList)
			)
		})
	},
	
}
