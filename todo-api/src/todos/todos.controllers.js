const uuid = require("uuid");

const todoDB = [
  {
    id: 1,
    task: "Task 1",
    is_done: false,
  },
  {
    id: 2,
    task: "Task 2",
    is_done: false,
  },
];

const getAllTodos = () => {
  return todoDB;
};

const getTodoById = (id) => todoDB.find((todo) => todo.id === id);

const createTodo = (task) => {
  const newTodo = {
    id: uuid.v4(),
    task,
    is_done: false,
  };
  todoDB.push(newTodo);
  return newTodo;
};

const updateTodo = (id, task, is_done) => {
  const matchedTodo = todoDB.find((todo) => todo.id === id);
  if (matchedTodo) {
    matchedTodo.task = task;
    matchedTodo.is_done = is_done;
    return matchedTodo;
  }
};

const deleteTodo = (id) => {
  // delete the id that matches the id in the array
  const index = todoDB.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todoDB.splice(index, 1);
  }
};

createTodo("Task 3");

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
