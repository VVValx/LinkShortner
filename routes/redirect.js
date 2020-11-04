const express = require("express");
const { UrlModel } = require("../models/urlSchema");
const router = express.Router();

router.get("/:linkId", async (req, res) => {
  const url = await UrlModel.findOne({ linkId: req.params.linkId });
  if (url) {
    res.redirect(url.originalUrl);
  }
});

module.exports = router;
