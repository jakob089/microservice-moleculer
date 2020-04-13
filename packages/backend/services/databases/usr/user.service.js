const { SERVICE_USER, TABLE_USER } = require('../../../constant')
const { DbMixin } = require('../../mixins/knexdb.mixin')

module.exports = {
    name: `db-${TABLE_USER}`,
    mixins: [DbMixin({ schema: 'usr', table: 'User', idField: 'usrId' })],
}