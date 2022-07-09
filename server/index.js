require("dotenv").config();
const express = require("express");
const path = require('path');
const cors = require("cors");
const axios = require("axios");
const mongooseConnect = require("./database/mongo.js");
const personsRoutes = require("./routes/personsRoute");

// server
const server = express();
// server uses
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 3000;

// API routes
// server.all("*", (req, res) => {
//   console.log("authentication");
// });

server.use("/persons", personsRoutes);

server.use(express.static(path.join(__dirname, './index.html')));

mongooseConnect(server);
server.listen(PORT, () => console.log(`server is running on the port ${PORT}`));
