const express = require("express");

const server = express();

server.use(express.json());

//Query params = ?teste=1
//Route params = /users/1
//Request body ={ "name": "Diego", "email":"diego@gmail.com"}

//CRUD - create, read, update, delete

const users = ["Diego", "Claudio", "Victor"];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);
  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1); //splice percorre todo index

  return res.json(users);
});

server.listen(3000);