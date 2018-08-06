let mongoose = require("mongoose");

//Set up promises with mongoose
mongoose.Promise = global.Promise;

//Connect to Heroku db or local db
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/MuseumTest");

module.exports = { mongoose }
