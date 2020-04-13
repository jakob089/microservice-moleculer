const { SERVICE_USER } = require('./../../constant')
const { TABLE_USER } = require('../../constant')

module.exports = {
  name: SERVICE_USER,
  mixins: [],
  actions: {
    getAllUsers: {
      cache: {
        keys:['active'],
        ttl: 10,
      },
      params: {
        active: {
          type: 'string',
          optional: true
        }
      },
      handler(ctx) {
        const { active } = ctx.params;
        return ctx.call(`db-${TABLE_USER}.find`, { where: { actFlg: active === 'true' } })
      }
    }
  }
}