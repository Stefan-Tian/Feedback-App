const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); // this line should always come before the next one since we need to build the user model first
require("./services/passport"); // we're importing it as a service, so no need to assign.

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey1, keys.cookieKey2, keys.cookieKey3]
  })
); // cookieSession will randomly pick one of the keys to encrypt
// cookie-session stores all the data directly in the cookie,
// express-session only stores the id and put the data in remote services
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // we're only gonna use this once, so there's no point of assigning it to a const

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Successfully connected to localhost:5000");
});
