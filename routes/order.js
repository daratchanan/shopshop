const router = require("express").Router();
const orderController = require('../controllers/order');


router.get('/', orderController.getAllOrder);
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;