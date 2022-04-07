const express = require('express')
const router = express.Router()

router.use('/film', require('./api/filmRoutes'))

router.use('/actor', require('./api/actorRoutes'))

router.use('/country', require('./api/countryRoutes'))

router.use('/address', require('./api/addressRoutes'))

router.use('/category', require('./api/categoryRoutes'))

router.use('/city', require('./api/cityRoutes'))

router.use('/staff_list', require('./api/staff_listRoutes'))

module.exports = router