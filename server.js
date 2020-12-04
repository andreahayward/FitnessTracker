const express = require("express");
const mongoose = require("mongoose");
//using morgan to log requests
const logger = require("morgan");

//express to make connection
const PORT = process.env.PORT || 8080;
const app = express();

const db = require("./models");

//databaseName
const database = "workout_db"

app.use(logger("dev"));
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to mongoose here

//routes
app.use("/api", require("./routes/api-routes.js"));
app.use("/", require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});