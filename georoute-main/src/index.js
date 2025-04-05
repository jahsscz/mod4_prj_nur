const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config/config");
const info = require("../package.json");

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST","DELETE","PUT","PATCH"],
    })
  );
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json({ limit: "30mb" }));

app.use(morgan("tiny"));
app.use(express.json());
const db = require("./config/psql");
require("./config/migration");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error while connecting with database");
  });

app.use(`/${config.ENV}/info`, (req, res) => {
  res.json({
      name: info.name,
      version: info.version,
      description: info.description,
      author: info.author
  })
})

app.use(`/${config.ENV}`, require("./routes/index.routes"));
module.exports = app;
