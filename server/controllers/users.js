let mongoose = require('mongoose');
let User = mongoose.model("User");

module.exports = {
	index: (req,res)=>{
		console.log("hit players.index");

	},
