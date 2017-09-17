module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "Not enough credit!" });
  }

  next();
};

// status code 402 means payment request but it's not available now
// status code 403 means forbidden
