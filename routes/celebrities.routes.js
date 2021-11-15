const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");

router.get("/celebrities", (req, res, next) => {
  CelebrityModel.find()
    .then((allCelebrities) => {
      res.render("../views/celebrities/celebrities.hbs", { allCelebrities });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/celebrities/create", (req, res, next) => {
  res.render("../views/celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  CelebrityModel.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(() => {
      next("Celebrity creation failed");
    });
});

module.exports = router;
