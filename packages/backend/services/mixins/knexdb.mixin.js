const { KnexDbMixin } = require('moleculer-db-knex')
const { getKnexConfig } = require('./../../utils/db.util')

exports.DbMixin = (options) => {
    const { schema, table, idField } = options || { schema: 'public', idField: 'id' }
    const configs = getKnexConfig();
    if (!table) {
        throw new Error('Table is required but not mentioned in options')
    }
    return KnexDbMixin({
        schema,
        table,
        idField,
        knex: {
            configs
        }
    })
}