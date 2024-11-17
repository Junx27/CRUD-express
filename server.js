const express = require("express");
const userRoute = require("./routes/users-route");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

//routing
app.use("/api/v1", userRoute);

//start server
app.listen(process.env.APP_PORT, () => {
  console.log("Server berjalan di server", process.env.APP_PORT);
});
