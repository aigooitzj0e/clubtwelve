let user = require('./../controllers/users');
let jersey = require('./../controllers/jerseys');
let path = require('path');

module.exports = (app)=>{
	// Login and Registration
	app.post('/api/register', user.register);
	app.post('/api/login', user.login);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}
