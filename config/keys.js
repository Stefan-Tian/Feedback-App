if (process.env.NODE_ENV === "production") {
  // when we use heroku, the env will automatically be set to production
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
