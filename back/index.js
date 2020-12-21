const express = require("express");
const path = require("path");
const db = require("./db/db");
const api = require("./api/routes");
const morgan = require("morgan");
const chalk = require("chalk");
const { User, Test, Question, Answer, Skill } = require("./db/models");
const { truncateSync } = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

db.sync({ force: false }).then(() => {
  app.listen(3000, () => console.log(chalk.blue("Escuchando en puerto 3000")));
});
