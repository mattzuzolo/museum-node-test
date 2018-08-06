let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  xLocation: {
    type: Number,
    required: true,
  },
  yLocation: {
    type: Number,
    required: true,
  }
});

module.exports = { Click };
