// services
require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const hbs = require("hbs");
// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY_SECRET);
// routes
const mongooseConnect = require("./database/mongo.js");
const personsRoute = require("./routes/personsRoute");
const albumsRoute = require("./routes/albumsRoute");
const postsRoute = require("./routes/postsRoute");
const commentsRoute = require("./routes/commentsRoute");
const photosRoute = require("./routes/photosRoute");
const productsRoute = require("./routes/productsRoute");
const stripeRoute = require("./routes/stripeRoute");
const mercadoPagoRoute = require("./routes/mercadoPagoRoute");
const notFoundRoute = require("./routes/notFoundRoute");
//

// server
const server = express();
const PORT = process.env.PORT || 3000;

// Server Uses
server.use(cors());
server.use(express.json());

// Serve Views
const viewsDirectoryPath = path.join(__dirname, "./views");
const partialsPath = path.join(__dirname, "./views/partials");
server.set("view engine", "hbs");
hbs.registerPartials(partialsPath);
server.use(express.static(viewsDirectoryPath));

server.get("/$|/index(.html)?", (req, res) => {
  res.render("index", {
    title: "Dashboard",
    clientId: process.env.PAYPAL_CLIENT_ID
  });
});

server.get("^/$|/about(.html)?", (req, res) => {
  res.render("./pages/about", {
    title: "article title",
  });
});

server.get("^/$|/success(.html)?", (req, res) => {
  res.render("./pages/success", {
    title: "article title",
  });
});

server.get("^/$|/cancel(.html)?", (req, res) => {
  res.render("./pages/about", {
    title: "article title",
  });
});

server.get("^/$|/forgot-password(.html)?", (req, res) => {
  res.render("./pages/forgot-password", {
    title: "article title",
  });
});

server.get("^/$|/login(.html)?", (req, res) => {
  res.render("./pages/login", {
    title: "article title",
  });
});

server.get("^/$|/register(.html)?", (req, res) => {
  res.render("./pages/register", {
    title: "article title",
  });
});

server.get("^/$|/tables(.html)?", (req, res) => {
  res.render("./pages/tables", {
    title: "article title",
  });
});

// server.get("^/$|/index(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// server.get("^/$|/about(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'pages/about.html'));
// });

// Use
server.use("/persons", personsRoute);
server.use("/albums", albumsRoute);
server.use("/posts", postsRoute);
server.use("/comments", commentsRoute);
server.use("/photos", photosRoute);
server.use("/products", productsRoute);
server.use("/stripe-checkout", stripeRoute);
server.use("/mercadopago", mercadoPagoRoute);
server.use("", notFoundRoute);

mongooseConnect(server);
server.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
