const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./controllers/articles_controller");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytimesdb";
mongoose.connect(MONGODB_URI);


app.listen(PORT, function() {
  console.log(`App now running on PORT ${PORT}`);
});


