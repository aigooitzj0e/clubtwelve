let user = require('./../controllers/users');
let jersey = require('./../controllers/jerseys');
let path = require('path');

module.exports = (app)=>{
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}
