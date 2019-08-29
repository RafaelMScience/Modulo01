const express = require("express");

const server = express();

server.use(express.json());

//Query params = ?teste=1
//Route params = /users/1
//Request body ={ "name": "Diego", "email":"diego@gmail.com"}

//CRUD - create, read, update, delete

const users = ["Diego", "Claudio", "Victor"];

server.use((req, res, next) => {
  //Middleware Global
  console.time("Request");
  console.log(`metodo: ${req.method}; URL: ${req.url}`);

  next();
  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  //middleware local
  if (!req.body.name) {
    return res.status(400).json({ error: "user noame is required" });
  }
  return next();
}

function checkUserinArray(req, res, next) {
  const user = users[req.params.index];

  if (!users[req.params.index]) {
    return res.status(400).json({ error: "user does not exists" });
  }

  req.user = user;

  return next();
}

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserinArray, (req, res) => {
  return res.json(req.user);
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);
  return res.json(users);
});

server.put("/users/:index", checkUserExists, checkUserinArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", checkUserinArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1); //splice percorre todo index

  return res.json(users);
});

server.listen(3000);
