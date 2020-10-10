const express = require("express");
const { json } = require("body-parser");

const routers = require("./routes");

const port = 3000;

const app = express();

app.use(json());

app.use((req, res, next) => {
  console.log("====================");
  console.log("req.query:", req.query);
  console.log("req.body", req.body);
  console.log("====================");

  next();
});

app.use(routers);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
