const { Schema, model } = require("mongoose");
const normalized = require("normalize-mongoose");

const User = new Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

User.plugin(normalized);

module.exports = model("User", User);
