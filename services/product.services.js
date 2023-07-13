const Product = require("../models/Product");


exports.getProductServices= async ()=>{
   const products = await Product.find({})
   return products;
};

exports.createProductServices = async(data) =>{
    const product = await Product.create(data)
    return product;
}