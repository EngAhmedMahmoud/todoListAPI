"use strict";
const mongoose = require("mongoose");
const scheam = mongoose.Schema;

const Task = new scheam({
    name: {
        type: String,
        required: "Please Enter Name",
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["pending", "onging", "completed"],
        default: ['pending']
    }
});
module.exports = mongoose.model("Tasks", Task, "tasks");