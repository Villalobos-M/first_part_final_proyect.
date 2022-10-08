const { DataBaseClass } = require("../modules/classProduct");
const firstProduct = new DataBaseClass();

exports.getAllProducts = async(req, res) => {
   const allProducts = await firstProduct.getAllProducts();

   if (!allProducts) {
      res.status(404).json({
         status: "error",
         message: 'No hay ningun producto',
      });
   }else{
   res.status(200).json({
      status: "success",
      data: 
         allProducts,
   })}
};

exports.getById = async (req, res) => {
   const { id } = req.params;
   const product = await firstProduct.getById(id);
    if (!product) {
       res.status(404).json({
          status: "error",
          message: "No hay ningun producto con ese id",
       });
    } else {
       res.status(200).json({
          status: "success",
          data: product,
       });
    }
};

exports.postProduct = async(req, res) => {
   const saveProduct = req.body;
   const newProduct = await firstProduct.postProduct(saveProduct);
      res.status(200).json({
         status: "success",
         data: `Se agrego un nuevo producto con el id: ${newProduct.id}`,
      });
   };

exports.deleteProduct = async (req, res) => {
   const { id } = req.params;
   const product = await firstProduct.deleteProduct(id);
    if (!product) {
       res.status(404).json({
          status: "error",
          message: "No hay ningun producto con ese id",
       });
    } else {
       res.status(200).json({
          status: "success",
          message: 'El producto fue elimado',
       });
    }
};

exports.updateProduct = async(req, res) => {
   const { id } = req.params;
   const saveProduct = req.body;
   const product = await firstProduct.updateProduct(saveProduct, id);
    if (!product) {
       res.status(404).json({
          status: "error",
          message: "No hay ningun producto con ese id",
       });
    } else {
       res.status(200).json({
          status: "success",
          message: "El producto fue editado",
       });
    }
};