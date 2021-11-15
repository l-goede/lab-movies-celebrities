const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  res.render("movies/movies.hbs");
});

router.get("/movies/create", (req, res, next) => {
  CelebrityModel.find()
    .then((allCelebrities) => {
      res.render("../views/movies/new-movie", { allCelebrities });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/movies/create", (req, res, next) => {
  const { cast, title, genre, plot } = req.body;

  MovieModel.create({ cast, title, genre, plot })
    .then(() => {
      console.log("new movie added successfully");
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("error creating movies", err);
      next("Movie creation failed");
    });
});

module.exports = router;
