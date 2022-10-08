const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
const { productsRouter } = require("./router/products.routes");
const { cartRouter } = require("./router/cart.routes");

app.use("/api/productos", productsRouter);
app.use("/api/carrito", cartRouter);

app.use("*", (req, res, next) => {
    res.status(404).json({
       status: "error",
       message: `${req.originalUrl} not found in this server.`,
    });
      
});

app.listen(8080, () => {
   console.log("express running");
});
