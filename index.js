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
const personsRoute = require("./routes/api/personsRoute");
const albumsRoute = require("./routes/api/albumsRoute");
const postsRoute = require("./routes/api/postsRoute");
const commentsRoute = require("./routes/api/commentsRoute");
const photosRoute = require("./routes/api/photosRoute");
const productsRoute = require("./routes/api/productsRoute");
const stripeRoute = require("./routes/api/stripeRoute");
const mercadoPagoRoute = require("./routes/api/mercadoPagoRoute");
const notFoundRoute = require("./routes/api/notFoundRoute");
// Pages Routes
const indexRoute = require("./routes/pages/indexRoute");
const aboutRoute = require("./routes/pages/aboutRoute");
const successRoute = require("./routes/pages/successRoute");
const cancelRoute = require("./routes/pages/cancelRoute");
const forgotPasswordRoute = require("./routes/pages/forgotPasswordRoute");
const loginRoute = require("./routes/pages/loginRoute");
const registerRoute = require("./routes/pages/registerRoute");
const tablesRoute = require("./routes/pages/tablesRoute");
const newsRoute = require("./routes/pages/newsRoute");

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

// Page Routes
server.use("/$|/index(.html)?", indexRoute);
server.use("^/$|/about(.html)?", aboutRoute);
server.use('^/$|/success(.html)?', successRoute);
server.use('^/$|/cancel(.html)?', cancelRoute);
server.use('^/$|/forgot-password(.html)?', forgotPasswordRoute);
server.use('^/$|/login(.html)?', loginRoute);
server.use('^/$|/register(.html)?', registerRoute);
server.use("^/$|/tables(.html)?", tablesRoute);
server.use("^/$|/news(.html)?", newsRoute);

// Use for api routes
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
