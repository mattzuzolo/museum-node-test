let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  xLocation: {
    type: Number,
  },
  yLocation: {
    type: Number,
  }
});

module.exports = { Click };
