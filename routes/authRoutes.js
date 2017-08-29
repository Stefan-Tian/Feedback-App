const passport = require("passport");

// make all of the authentication process into a function for index to call
module.exports = app => {
  // scope: what info do you want google to provide
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.send("You just logged in!");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout(); // kills the cookie
    res.send("You just logged out");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
