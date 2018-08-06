let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  xLocation: {
    coord: Number,
    default: -1
  },
  yLocation: {
    coord: Number,
    default: -1
  },
});

module.exports = { Click };
