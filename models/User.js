const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String
  }
});

mongoose.model("User", userSchema);
