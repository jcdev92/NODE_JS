//* archivo de barril
//? se usa para agrupar exportaciones
const {getId} = require('../plugins/get-id.plugins');
const {getAge} = require('../plugins/get-age.plugins');
const {http} = require('../plugins/http-client.plugin')
const buildLogger = require('../plugins/logger.plugin')

//? exportacion multiple
module.exports = {
    getAge,
    getId,
    http,
    buildLogger
}
