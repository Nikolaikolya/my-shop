const User = require("../models/User");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { secret } = require("../config");

const generateAccessToken = (id, roles) => {
  const payload = { id, roles };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class Auth {
  async registration(req, res) {
    try {
      const { userName, password } = req.body;
      const candidate = await User.findOne({ userName });

      if (candidate)
        return res
          .status(400)
          .json({ message: "Not register user... Try again!" });

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const newUser = new User({
        userName,
        password: hashPassword,
        roles: [userRole.value],
      });

      await newUser.save();

      return res.json({ message: "Success create new User!" });
    } catch (e) {
      console.error(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
      const token = generateAccessToken(1, "USER");
      return res.status(200).json({ token });
    } catch (e) {
      console.error(e);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.error(e);
      res.status(400).json({ message: "Gel all users error" });
    }
  }
}

module.exports = new Auth();
