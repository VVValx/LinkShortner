const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/playground", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error connecting to database" + err));
};
