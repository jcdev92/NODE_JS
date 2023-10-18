const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
//! the next plugin allows to receive data from a json format
app.use(express.json());

const todoRouter = require("./todos/todos.router");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server OK!",
  });
});

app.use("/", todoRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
