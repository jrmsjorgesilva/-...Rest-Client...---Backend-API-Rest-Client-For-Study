const router = require('express').Router();
const stripe = require('../controllers/payments/stripe');

router.post('/', stripe);

module.exports = router;