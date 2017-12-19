let mongoose = require('mongoose');
let Jersey = mongoose.model("Jersey");

module.exports = {

	newJersey: (req, res)=>{
		console.log('hit new jersey creation');
		let newJersey = new Jersey(req.body);
		newJersey.save((err)=>{
			err ? (
				console.log('error!', err),
				res.json(err)
			) : (
				console.log('Successfully created a jersey'),
				res.json(newSurvey)
			)
		})
	},

	allJerseys: (req, res)=>{
		console.log('hit the all jerseys controller');
		Jersey.find().exec((err, jerseyList)=>{
			err ? (
				console.log('error', err),
				res.json(err)
			) : (
				console.log('Successfully got all the jerseys'),
				res.json(jerseyList)
			)
		})
	},

	getJersey: (req,res)=> {
		console.log('hit getJersey in controllers', req.body.j_id);
		Jersey.find({_id: req.body.j_id}).exec((err, foundJersey)=>{
			err ? (
				console.log('error in getJersey', err),
				res.json(err)
			) : (
				console.log('found jersey', foundJersey),
				res.json(foundJersey)
			)
		})
	},

	deleteJersey: (req,res)=>{
		console.log('hit the delete jersey in controller');
		Jersey.findByIdAndRemove(jersey._id, jersey).exec((err, deletedJersey)=>{
			err ? (
				console.log('something went wrong'),
				res.json(err)
			) : (
				console.log('success'),
				res.json(deletedJersey)
			)
		})
	},

}
