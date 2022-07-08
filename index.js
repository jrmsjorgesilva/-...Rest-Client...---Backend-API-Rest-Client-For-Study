require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
var bodyParser = require("body-parser");
const mongooseConnect = require("./database/mongo.js");
const personsRoutes = require('./routes/personsRoute');


// create application/json parser <-> x-www-form-urlencoded parser
// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// server
const server = express();

// server uses
server.use(cors());
server.use(bodyParser.json());

// API routes

server.use('/persons', personsRoutes);

const PORT = process.env.PORT || 3000;

server.get("/", (req, res) => {
  res.json("Oieu aqui");
});

mongooseConnect(server);
server.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
