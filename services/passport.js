const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("User");

//user is what we just pull out from the findOne function
passport.serializeUser((user, done) => {
  done(null, user.id); //the id here is mongo produced, not the googleID, and we're using it because we want to add facebook later
});

passport.deserializeUser((id, done) =>
  User.findById(id).then(user => done(null, user))
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have that user
        return done(null, existingUser); // null means no error
      }
      // we don't have the record, so save the user to db
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
); // use google as my authentication strategy
