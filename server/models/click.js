let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  xLocation: {
    type: String,
    required: true,
  },
  yLocation: {
    type: String,
    required: true,
  }
});

module.exports = { Click };
