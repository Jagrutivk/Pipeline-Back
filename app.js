const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    mesg: "Hello, I am backend here.. Welcome",
  });
});

app.listen(3000);
