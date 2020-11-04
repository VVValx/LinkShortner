const express = require("express");
const routers = express.Router();
const uniqid = require("../utils/genId");
const { UrlModel } = require("../models/urlSchema");

// Making GET request   /api/short/test
routers.get("/", async (req, res) => {
  const allUrl = await UrlModel.find().select("newUrl -_id");

  res.send(allUrl);
});

// Making POST request /api/short
routers.post("/", async (req, res) => {
  let newDoc = await UrlModel.findOne({ originalUrl: req.body.url });
  if (newDoc) return res.send({ url: newDoc.newUrl });

  const myId = uniqid(6);

  newDoc = new UrlModel({
    originalUrl: req.body.url,
    linkId: myId,
    newUrl: `localhost:5000/${myId}`,
  });

  newDoc = await newDoc.save();

  res.send({ url: newDoc.newUrl });
});

module.exports = routers;
