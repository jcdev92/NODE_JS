//* /todos [POST, GET]
//* /todos/:id [GET]

const router = require("express").Router();

const todoServices = require("./todos.services");

router.get("/todos", todoServices.getTodos);
router.get("/todos/:id", todoServices.getOneTodo);
router.post("/todos", todoServices.createNewTodo);
router.patch("/todos/:id", todoServices.updateServiceTodo);
router.delete("/todos/:id", todoServices.deleteServiceTodo);

module.exports = router;
