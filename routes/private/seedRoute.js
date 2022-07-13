const router = require('express').Router();
const createSeed = require('../../controllers/crawlers/createSeed');

router.get('/', createSeed);

module.exports = router;