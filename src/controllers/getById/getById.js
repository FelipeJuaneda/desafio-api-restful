const products = require("../../contenedor");

module.exports = (req, res) => {
  const product = products.getById(req.params.id);
  console.log(product);
  if (product) {
    res.json(product);
  } else {
    res.json({ error: "producto no encontrado" });
  }
};
