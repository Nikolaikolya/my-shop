const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3035;

const serverStart = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started from ${PORT} port!`);
    });
  } catch (e) {
    console.error(e);
  }
};

serverStart();
