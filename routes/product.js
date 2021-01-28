const router = require("express").Router();
const productController = require('../controllers/product');
const { upload } = require("../middleware/upload");

router.get('/top', productController.getTopProduct);
router.get('/', productController.getProducts);

router.get('/allProductType', productController.getAllProductTypes);
router.get('/allProductType_id/:id', productController.getProductByType);

router.get('/:id', productController.getProductById);
router.post('/', upload.single("image"), productController.createProduct);


router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
