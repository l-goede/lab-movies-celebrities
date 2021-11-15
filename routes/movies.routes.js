const router = require("express").Router();
const { populate } = require("../models/Celebrity.model");
const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      res.render("movies/movies.hbs", { movies });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;

  MovieModel.findById(id)
    .populate("cast")
    .then((movie) => {
      res.render("./movies/movie-details.hbs", { movie });
    })
    .catch((err) => {
      next(err);
    });
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
      res.redirect("/movies");
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/movies/:id/delete", (req, res, next) => {
  const { id } = req.params;

  MovieModel.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
