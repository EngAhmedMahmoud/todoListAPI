"use strict";
const express = require("express");
const todoListCtrl = require("./todoCtrl");

const router = express.Router();
router.get("/", todoListCtrl.all);
router.post("/", todoListCtrl.create);
router.put("/task/:id", todoListCtrl.update);
router.get("/task/:id", todoListCtrl.show);
router.delete("/task/:id", todoListCtrl.delete);

module.exports = router;
