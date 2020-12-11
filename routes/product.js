const router = require("express").Router();
const productController = require('../controllers/product');

router.get('/top', productController.getTopProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
