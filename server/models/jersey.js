let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let JerseySchema = mongoose.Schema({
	image: {type: String, require: true},
  player: {type: String, required: true},
	team: {type:String, required:true},
	quantity: {type: Number, required: true},
	description: {type:String, required:true, maxlength: 200},
	price: {type: Number, required:true, min: 1},

}, {timestamps:true});
mongoose.model('Jersey', JerseySchema);
