const express = require("express");

const router = express.Router();

//import controller
const {createTodo}= require("../controller/createTodo");
const {getTodo,getTodoById}= require("../controller/getTodo");
const {updateTodo,updateStatus}= require("../controller/updateTodo");
const {deleteTodo}= require("../controller/deleteTodo");

router.post("/Todo",createTodo);
router.get("/Todo",getTodo);
router.get("/Todo/:id",getTodoById);
router.put("/Todo/:id",updateTodo);
router.patch("/Todo/:id",updateStatus)
router.delete("/Todo/:id",deleteTodo);

module.exports = router;