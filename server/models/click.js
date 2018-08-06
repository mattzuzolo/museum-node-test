let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  clickPosition: {
    xLocation: Number,
    yLocation: Number
  },
});

module.exports = { Click };
