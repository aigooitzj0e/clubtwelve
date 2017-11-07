let user = require('./../controllers/users');
let jersey = require('./../controllers/jerseys');
let path = require('path');

module.exports = (app)=>{
	// Login and Registration
	app.post('/api/register', User.register);
	app.post('/api/login', User.login);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}
