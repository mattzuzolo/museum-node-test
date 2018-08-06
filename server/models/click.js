let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  xLocation: {
    type: Number,
    required: true,
    // default: -1
  },
  yLocation: {
    type: Number,
    required: true,
    // default: -1
  }
});

module.exports = { Click };
