let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let JerseySchema = mongoose.Schema({
  player: {type: String, required: true},
	team: {type:String, required:true},
	description: {type:String, required:true, maxlength: 200},
	price: {type: Number, required:true, min: 1},

}, {timestamps:true});
mongoose.model('Jersey', JerseySchema);
