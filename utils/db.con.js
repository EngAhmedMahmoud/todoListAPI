"use strict";
const mongoose = require("mongoose");
//create connection
exports.DB_connection = (DB_URL) => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })
        .then(console.log("Database connection Done!"))
        .catch((error) => console.log(error));
}
