const products = require("../../contenedor");

module.exports = (req, res) => {
  const update = products.updateProduct(req.params.id, req.body);
  if (update) {
    res.json(update);
  } else {
    res.json({ error: "producto no encontrado" });
  }
};
