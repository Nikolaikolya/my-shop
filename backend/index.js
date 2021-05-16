const express = require("express");

const app = express();

const PORT = process.env.PORT || 3035;

app.listen(PORT, () => {
  console.log(`Server started from ${PORT} port!`);
});
