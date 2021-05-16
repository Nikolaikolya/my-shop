const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3035;

const serverStart = async () => {
  try {
    await mongoose.connect("mongodb://localhost/shop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server started from ${PORT} port!`);
    });
  } catch (e) {
    console.error(e);
  }
};

serverStart();
