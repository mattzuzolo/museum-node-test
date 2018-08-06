let mongoose = require("mongoose");

let Click = mongoose.model("Click", {
  //define schema here:
  text: {
      type: String,
      required: true,
      minLength: 1,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
});

module.exports = { Click };
