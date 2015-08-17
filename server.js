// require express
var express = require("express");
// path module
var path = require("path");
var jQuery = require("jquery")(require("jsdom").jsdom().parentWindow);
jQuery = jQuery();
// var bootstrap = require("bootstrap");
// create the express app
var app = express();
// require body-parser
var bodyParser = require('body-parser');
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(bodyParser.urlencoded({ extended: true}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})
// post route for adding a user
app.post('/result', function(req, res) {
	console.log("POST DATA", req.body);
	res.render("result", {results: req.body});
	// res.redirect('/');
})
app.listen(9000, function() {
	console.log("listening on port 9000");
})