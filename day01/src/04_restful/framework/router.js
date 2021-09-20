const router = require('koa-router')();
const {
  init, get, create, update, del, list
} = require('./api')

router.get('/api/:list/:id', init, get)
router.get('/api/:list/', init, list)
router.get('/api/:list/', init, create)
router.get('/api/:list/:id', init, update)
router.get('/api/:list/:id', init, del)


module.exports = router.routes()