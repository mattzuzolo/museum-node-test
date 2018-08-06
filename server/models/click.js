let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  xLocation: {
    coord: Number,
  },
  yLocation: {
    coord: Number,
  }
});

module.exports = { Click };
