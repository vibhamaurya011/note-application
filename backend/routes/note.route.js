const express = require("express");
const { get, add, update, remove } = require("../controller/note.controller");
const { auth } = require("../middleware/auth.middleware");

const noteRoute = express.Router();
noteRoute.use(auth);

noteRoute.get("/", get);
noteRoute.post("/create",  add);
noteRoute.put("/update/:noteID", update);
noteRoute.delete("/delete/:noteID", remove);

module.exports = { noteRoute }; 