const router = require("express").Router();
const cartItemController = require('../controllers/cartItem');


router.get('/', cartItemController.getAllCartItem);
router.get('/:id', cartItemController.getCartItemById);
router.post('/', cartItemController.createCartItem);
router.put('/:id', cartItemController.updateCartItem);
router.delete('/:id', cartItemController.deleteCartItem);

module.exports = router;
