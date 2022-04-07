const express = require('express')
const router = express.Router()

// build individual router files
router.use('/film', require('./api/filmRoutes'))

router.use('/actor', require('./api/actorRoutes'))

router.use('/country', require('./api/countryRoutes'))

router.use('/customer', require('./api/customerRoutes'))

module.exports = router;