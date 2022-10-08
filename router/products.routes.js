const express = require("express");
const router = express.Router();

//controllers
const {
   getAllProducts,
   getById,
   postProduct,
   deleteProduct,
   updateProduct,
} = require("../controllers/products.controller");

//middleware
const {protectAdmin} = require('../middlewares/accessProtection')

router.get('/', getAllProducts);

router.get('/:id', getById);

router.post("/", protectAdmin, postProduct);
router.put("/:id", protectAdmin, updateProduct);
router.delete("/:id", protectAdmin, deleteProduct);

module.exports = { productsRouter: router };