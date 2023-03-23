const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routing = require("./routing.js");
const handlebars = require("express-handlebars");
const port = 3000;

const app = express();

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`,
  })
);

app.use(express.static(path.join(__dirname, "/public")));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
routing(app);

app.listen(port, console.log(`Listening on port ${port}...`));
