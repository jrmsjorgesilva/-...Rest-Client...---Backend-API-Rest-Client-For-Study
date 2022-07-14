const router = require('express').Router();
const mercadoPagoWebhookNotifications = require('../../controllers/payments/mercadoPagoWebhookNotifications');

router.post('/', mercadoPagoWebhookNotifications);

module.exports = router;