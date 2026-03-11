let products = [];

exports.getProducts = (req, res) => {
  res.send(products);
};

exports.addProducts = (req, res) => {
  const product = req.body;

  products.push(product);

  res.send({
    message: "Product added",
    data: product,
  });
};

exports.getProductById = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    res.send("Product not found!");
  }

  res.send(product);
};

exports.removeProductById = (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((p) => p.id !== id);

  res.send(`Product ${id} removed!`);
};
