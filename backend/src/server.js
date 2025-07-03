const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post("/api/todo", async (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: "task is required" });
    }
    try {
      await todoService.addTodo({ task });
      const todos = await todoService.getTodos();
      res.status(201).json(todos);
    } catch (error) {
      res.status(500).json({ error: "server error" });
    }
  });

  return server;
};
module.exports = server;