const express = require("express");
const mongoose = require("mongoose");
const routes = require("./controllers/articles_controller");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytimesdb";
mongoose.connect(MONGODB_URI);


app.listen(PORT, function() {
  console.log(`App now running on PORT ${PORT}`);
});


