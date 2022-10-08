const express = require("express");
const router = express.Router();

//controllers
const {
   postCart,
   getAllCarts,
   getCartById,
   deleteCart,
   getProductCart,
   postProductCart,
   deleteProductInCart,
} = require("../controllers/cart.controller");

//cart routers
router.get("/", getAllCarts);
router.get("/:id", getCartById);
router.post("/", postCart);
router.delete("/:id", deleteCart);

//products in cart router
router.get("/:id/productos", getProductCart);
router.post("/:id/productos", postProductCart);
router.delete("/:id/productos/:id_prod", deleteProductInCart);




module.exports = { cartRouter: router };
