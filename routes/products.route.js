const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();


router.route('/')
.get(productController.getProducts)
.post(productController.createProducts)


module.exports = router