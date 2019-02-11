"use strict";
const mongoose = require("mongoose");
//create connection
function Connection(DB_URL) {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true })
        .then(console.log("Database connection Done!"))
        .catch((error) => console.log(error));
}
exports.DB_connection = Connection();
