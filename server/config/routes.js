let user = require('./../controllers/users');
let jersey = require('./../controllers/jerseys');
let path = require('path');

module.exports = (app)=>{
	// Login and Registration
	app.post('/api/register', user.register);
	app.post('/api/login', user.login);
	app.get('/api/logout', user.logout);
	// Admin
	app.get('/api/admin' user.admin);
	app.get('/api/allusers', user.allusers);
	//Jerseys
	app.post('/api/createjersey', jersey.newJersey);
	app.get('/api/alljerseys', jersey.allJerseys);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}
