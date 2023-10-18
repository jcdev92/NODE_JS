const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./todos.controllers");

const getTodos = (req, res) => {
  const data = getAllTodos();
  res.status(200).json({ data });
};

const getOneTodo = (req, res) => {
  const { id } = req.params;
  const data = getTodoById(id);
  if (data !== undefined) {
    res.status(200).json({ data });
  } else {
    res.status(404).json({ id: id, message: "Not found" });
  }
};

const createNewTodo = (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.status(400).json({ message: "Bad request" });
  } else {
    const data = createTodo(task);
    res.status(200).json({ data });
  }
};

const updateServiceTodo = (req, res) => {
  const { id } = req.params;
  const { task, is_done } = req.body;
  if (id) {
    const data = updateTodo(id, task, is_done);
    res.status(200).json({ data });
  } else {
    res.status(404).json({ id: id, message: "Not found" });
  }
};
const deleteServiceTodo = (req, res) => {
  const { id } = req.params;
  if (id !== undefined && id !== null && id !== "") {
    deleteTodo(id);
    res.status(204).json();
  } else {
    res.status(404).json({ id: id, message: "Not found" });
  }
};

module.exports = {
  getTodos,
  getOneTodo,
  createNewTodo,
  updateServiceTodo,
  deleteServiceTodo,
};
