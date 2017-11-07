let mongoose = require('mongoose');
let Jersey = mongoose.model("Jersey");

module.exports = {
	index: (req,res)=>{
		console.log("hit players.index");
	},
