const router = require('express').Router();
const stripeCheckout = require('../../controllers/payments/stripeCheckout');

router.post('/', stripeCheckout);

module.exports = router;