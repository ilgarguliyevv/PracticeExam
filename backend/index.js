const express = require("express");
const routes = require("./routes/clockRoutes.js");
require("dotenv").config();
require("./config/db.js");

const cors = require("cors");

const bodyParser = require("body-parser");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server has started!" + PORT);
});
