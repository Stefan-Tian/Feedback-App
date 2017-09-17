const mongoose = require("mongoose");
const RecipientSchema = require("./Recipient");

const surveySchema = new mongoose.Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

// the reason why we didn't set up survey as user's subdocument is that
// mongodb has a storage limation, if we set the survey as user's subdocument
// it'll lead to the dilution of survey recipients limit.

mongoose.model("Surveys", surveySchema);
