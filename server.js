const app = require("./app");

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${PORT}`);
});

server.on("error", (error) => console.error(`Error en Servidor ${error}`));
