const express = require("express");

const server = express();

//Query params = ?teste=1
//Route params = /users/1
//Request body ={ "name": "Diego", "email":"diego@gmail.com"}

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.json({ message: `Buscando o usuario ${id}` });
});

server.listen(3000);
