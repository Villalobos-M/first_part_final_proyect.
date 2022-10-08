const role = true;  //true = admin     false = guess

exports.protectAdmin = (req, res, next) => {
   if (role !== true) {
       res.status(400).json({
          status: "error",
          message: `Access denied in ${req.originalUrl}`
       });
   }

   next();
};
