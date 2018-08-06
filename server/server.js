//include libraries
let express = require("express");
let bodyParser = require("body-parser");
let { ObjectID } = require("mongodb");
let cors = require('cors');

//include local files
let { mongoose } = require("./db/mongoose");
let { Click } = require("./models/click");

//Store express application in app
//configured for heroku
let app = express();
const PORT = process.env.PORT || 3000;

//configure middleware
app.use(bodyParser.json()); //can now send JSON to express application

app.use(cors)

//allow cross-origin access
// app.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
//  });

//configure routes here
app.post("/clicks", (request, response) => {
  let click = new Click({
    xLocation: request.body.xLocation,
    yLocation: request.body.yLocation
  })

  click.save().then((doc) => {
    response.send(doc);
  }, (error) => {
    response.status(400).send(error);
  });
});


//GET
app.get("/clicks", (request, response) => {
  Click.find().then((clicks) => {
    response.send({clicks});
  }, (error) => {
    response.status(400).send(error);
  });
});

app.get("/clicks/:id", (request, response) => {
  let id = request.params.id;

  if(!ObjectID.isValid(id)){
    return response.status(404).send();
  }

  Click.findById(id).then((click) => {
    if(!click){
      return response.status(404).send();
    }
    response.send({click});
  }).catch((error) => {
    response.status(400).send();
  });
});



app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});

module.exports = { app };
