"use strict";
require("dotenv/config");
const express = require('express');
const bodyParser = require("body-parser");
const DB_CON = require('./utils/db.con');
const app = express();
const PORT = process.env.SERVER_PORT || 7000;
const IP = process.env.SERVER_URL;
const DB_URL = process.env.DB_URL;
const todoRoutes = require('./api/todoRoutes');

//create connection
DB_CON.DB_connection(DB_URL);
//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
app.use('/tasks', todoRoutes);
//404 handle errors
app.use((req, res, next) => {
    res.status(404).send({ url: req.originalUrl + " (Not found) " });
});
app.listen(PORT, () => {
    console.log(`Server started ${IP}:${PORT}`);
});





