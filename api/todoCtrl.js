"use strict";
const Task = require("./todoModel");
//all
exports.all = (req, res, next) => {
    Task.find()
        .then((tasks) => {
            res.status(200).json(tasks);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};
//create
exports.create = (req, res, next) => {
    let task = new Task(req.body);
    task.save()
        .then((task) => {
            res.status(200).json(task);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
}
//show
exports.show = (req, res, next) => {
    let taskId = req.params.id;
    Task.findById(taskId)
        .then((task) => {
            res.status(200).json(task);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
};
//delete
exports.delete = (req, res, next) => {
    let taskId = req.params.id;
    Task.findByIdAndDelete(taskId)
        .then((task) => {
            res.status(200).json(task);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};
//update
exports.update = (req, res, next) => {
    let taskId = req.params.id;
    Task.findByIdAndUpdate(taskId, req.body, { new: true })
        .then((task) => {
            res.status(200).json(task);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
};
