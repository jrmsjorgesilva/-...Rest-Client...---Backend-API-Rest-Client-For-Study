require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const mongooseConnect = require("./database/mongo.js");
const personsRoute = require("./routes/personsRoute");
const albumsRoute = require("./routes/albumsRoute");
const postsRoute = require("./routes/postsRoute");
const commentsRoute = require("./routes/commentsRoute");
const photosRoute = require("./routes/photosRoute");
const notFoundRoute = require("./routes/notFoundRoute");
// const indexView = require("./views.old/js/main");

// server
const server = express();
const PORT = process.env.PORT || 3000;

// Server Uses
server.use(cors());
server.use(express.json());

// Views OLD ONE
// server.set("view engine", "ejs");

// indexView OLD ONE
// server.get("/", (req, res) => {
//   res.render("index", indexView);
// });

server.get("^/$|/index(.html)?", (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

server.get("^/$|/about(.html)?", (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname, 'views', 'pages/about.html'));
});

// Use
server.use("/persons", personsRoute);
server.use("/albums", albumsRoute);
server.use("/posts", postsRoute);
server.use("/comments", commentsRoute);
server.use("/photos", photosRoute);
server.use("", notFoundRoute);

mongooseConnect(server);
server.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
