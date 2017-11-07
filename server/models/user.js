let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
	name: {type:String, required:true},
	email: {type: String, required:true},
	password: {type:String, required:true, minlength: 8},
}, {timestamps:true});


mongoose.model('User', UserSchema);
