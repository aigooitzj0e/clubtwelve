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
		}
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
	}
}
