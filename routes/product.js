var express = require('express');
var router = express.Router();

// Require controller modules
var productController = require('../controllers/productController');

// Get request to get all products
router.get('/', productController.list);

// GET request for insert a new product
router.get('/create', productController.create);

// GET request for edit one product
router.get('/:id/edit', productController.edit);

// POST request for STORE a new product
router.post('/store', productController.store);

// PUT request to update a product
router.post('/update', productController.update);

// POST request to delete a product
router.post('/:id/delete', productController.delete);





// POST request to update a product
//router.post('/:id/update', productController.update);

module.exports = router;