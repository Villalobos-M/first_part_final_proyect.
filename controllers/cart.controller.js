const { DataBaseCart } = require("../modules/classCart");
const dbCart = new DataBaseCart();

//Carts Controllers
exports.getAllCarts = async (req, res) => {
   const allCarts = await dbCart.getAllCarts();

   if (!allCarts) {
      res.status(404).json({
         status: "error",
         message: "No hay ningun producto",
      });
   } else {
      res.status(200).json({
         status: "success",
         data: allCarts,
      });
   }
};
exports.postCart = async (req, res) => {
   const newCart = await dbCart.postCart();
   res.status(200).json({
      status: "success",
      data: `Se agrego un nuevo carrito con el id: ${newCart.id}`,
   });
};
exports.getCartById = async (req, res) => {
   const { id } = req.params;
   const cart = await dbCart.getById(id);
   if (!cart) {
      res.status(404).json({
         status: "error",
         message: "No hay ningun cart con ese id",
      });
   } else {
      res.status(200).json({
         status: "success",
         data: cart,
      });
   }
};
exports.deleteCart = async (req, res) => {
   const { id } = req.params;
   const cart = await dbCart.deleteCart(id);
   if (!cart) {
      res.status(404).json({
         status: "error",
         message: "No hay ningun producto con ese id",
      });
   } else {
      res.status(200).json({
         status: "success",
         message: "El carrito fue vaciado y elimado",
      });
   }
};

//Products in Cart Controllers
exports.postProductCart = async (req, res) => {
   const { idProduct } = req.body;
   const { id: idCart } = req.params;

   const addProduct = await dbCart.postProductCart(idCart, idProduct);
      if (!addProduct) {
         res.status(404).json({
            status: "error",
            message: "No hay ningun cart con ese id",
         });
      } else {
         res.status(200).json({
            status: "success",
            message: `El producto se agrego al carrito con id: ${idCart}`,
         });
      }
};
exports.deleteProductInCart = async (req, res) => {
   const { id: idCart, id_prod } = req.params;

   const product = await dbCart.deleteProductInCart(idCart, id_prod);
   if (!product) {
      res.status(404).json({
         status: "error",
         message: `No se encuentra el producto con id ${id_prod} en el carrito con id ${idCart}`,
      });
   } else {
      res.status(200).json({
         status: "success",
         message: `El producto se elimino del carrito id: ${idCart}`,
      });
   }
};
exports.getProductCart = async (req, res) => {
   const { id } = req.params;
   const products = await dbCart.getProducts(id);
   if (!products) {
      res.status(404).json({
         status: "error",
         message: "El carrito no existe",
      });
   } else {
      res.status(200).json({
         status: "success",
         products: products,
      });
   }
};

