const express = require("express");
const bodyParser = require("body-parser");
const shortLink = require("../routes/shortLink");
const redirect = require("../routes/redirect");

module.exports = function (app) {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //routes
  app.use("/links", shortLink);
  app.use("/", redirect);
};
