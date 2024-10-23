var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/contact", function (req, res) {
  res.render("contacto");
});

router.get("/home", function (req, res) {
  res.render("home", { movies: movieList }); // 'movieList' es un array de películas
});

router.get("/login", function (req, res) {
  res.render("login");
});

module.exports = router;
