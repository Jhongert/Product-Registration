var express = require('express');
var router = express.Router();

// Require controller modules
var productController = require('../controllers/productController');

// Get request for index
router.get('/', productController.index);

// POST request for insert a new product
router.post('/create', productController.create);

// POST request to delete a product
router.post('/:id/delete', productController.delete);

// GET request for one product
router.get('/:id', productController.detail);

// GET request for all products
//router.get('/products', productController.list);

// POST request to update a product
router.post('/:id/update', productController.update);

module.exports = router;