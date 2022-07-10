require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const mongooseConnect = require("./database/mongo.js");
const personsRoute = require("./routes/personsRoute");
const albumsRoute = require('../routes/albumsRoute');
const indexView = require('../views/js/index');

// server
const server = express();
const PORT = process.env.PORT || 3000;

// server uses
server.use(cors());
server.use(express.json());

// use
server.use("/persons", personsRoute);
server.use("/albums", albumsRoute);

server.use(express.static(path.join(__dirname, "./index.html")));

// API routes
// server.all("*", (req, res) => {
//   console.log("authentication");
// });

// server.get('/', (req, res) => {
//     res.render('oi eu aqui');
// });

// Views
server.set("view engine", "ejs");

server.get("/", (req, res) => {
//   indexView
  res.render("index", indexView);
});

mongooseConnect(server);
server.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
