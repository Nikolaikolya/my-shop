const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const Role = mongoose.Schema({
  value: { type: String, unique: true, default: "USER" },
});

Role.plugin(normalize);

module.exports = mongoose.model("Role", Role);
