const express = require("express");

const Router = require("../routers/router.js");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use("/api/cars", Router);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;