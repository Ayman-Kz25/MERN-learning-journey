let users = [];

exports.getUsers = (req, res) => {
  res.send(users);
};

exports.createUser = (req, res) => {
  const user = req.body;

  users.push(user);

  res.send({
    message: "User created",
    data: user,
  });
};

exports.getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.send("User not found!");
  }

  res.send(user);
};

exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.send(`User ${id} deleted!`);
};
