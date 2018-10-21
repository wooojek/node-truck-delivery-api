const KoaRouter = require('koa-router');
const router = new KoaRouter({
    prefix: '/delivery'
});
const delivery = require('../handlers/delivery');

router.post('/', delivery);

module.exports = router.middleware();