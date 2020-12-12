const express = require("express");
const mongoose = require("mongoose");
//using morgan to log requests
const logger = require("morgan");

//express to make connection
const PORT = process.env.PORT || 8080;
const app = express();

const db = require("./models");

//databaseName
//const database = "workout_db"

app.use(logger("dev"));
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to mongoose here
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//mongo string add PW and db name then add this to heroku key page config vars (under settings), can delete this after heroku. currently under rocky stream will need to add to new deployment
//mongodb+srv://ahfitnesstracker2:<LZr1fTGC0Jd9SSdG>@cluster0.jjzdr.mongodb.net/<workout_db>?retryWrites=true&w=majority

//routes
app.use("/api", require("./routes/api-routes.js"));
app.use("/", require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});