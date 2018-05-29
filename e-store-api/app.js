////////////////////////////////////////
//   a p p . j s

// This "upgrades" node.js to use ES6, like a big boy.
require("babel-register"); // https://blog.andrewray.me/how-to-use-es6-in-nodejs/

// Initialize Express
let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});

// Set a static folder for our client-side code.
app.use(express.static(__dirname + '/public'));

// Initialize the API
let api = require('./api');
api.init(app);

// Start up Node.
app.listen(8192, function() {
  console.log("StudentRegistrationApi app listening on port 8192.");
});

