const daoCommon = require('./common/daoCommon')

const filmDao = {
    ...daoCommon,
    ...require('./api/filmDao')

    // const filmDao = Object.assign(daoCommon, require('./api/filmDao))

    // const filmDao = {...daoCommon, ...require('./api/filmDao)}
}

module.exports = {
    filmDao
}