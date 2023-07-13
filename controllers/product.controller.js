const { getProductServices, createProductServices } = require("../services/product.services");

module.exports.getProducts= async (req, res, next)=>{

    // .find({}).sort({quantity: 1})

    try {
        const products = await getProductServices()
        // .where("name").equals(/\w/)
        // .where("quantity").gt(5).lt(20)
        // .limit(5).sort({quantity:1})
        // .limit(2)
        res.status(200).json({
            status: "Success",
            message: "Data successfully got",
            data: products
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Can't get item",
            error: error.message
        })
    }
};

// ----------- Post method ---------

module.exports.createProducts =  async (req, res, next)=>{
    try {
  
      const result = await createProductServices(req.body)
  
      // Instance method
      result.logger()
      // const product = new Product(req.body);
      // const result = await product.save()
  
      res.status(200).json({
          status: 'Success',
          message: 'Data inserted successfully',
          data: result
      })
    } catch (error) {
      res.status(400).json({
          status: 'failed',
          message: 'Data is not inserted',
          error: error.message
      })
    }
  }