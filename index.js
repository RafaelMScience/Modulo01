const express = require("express");

const server = express();

//Query params = ?teste=1
//Route params = /users/1
//Request body ={ "name": "Diego", "email":"diego@gmail.com"}

//CRUD - create, read, update, delete

const users = ["Diego", "Claudio", "Victor"];

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
