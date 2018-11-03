const express = require("express");
const router = express.Router();
const path = require("path");
const db = require ("../models");


router.post("/api/articles", (req, res) => {
  db.Article 
    .create(req.body) 
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.status(422).json(err));
});

router.get("/api/articles", (req, res) => {
  db.Article.find({})
    .populate("note")
    .then(dbArticles => res.json(dbArticles))
    .catch(err => console.log(err))
});

router.post("/api/articles/:id", function(req, res) {
  console.log("route hit!");
  db.Note
    .create(req.body)
    .then(function(dbNote) {
      return db.Article.findOneAndUpdate({_id: req.params.id}, {note: dbNote._id}, {new: true});
    })
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;

