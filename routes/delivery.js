const KoaRouter = require('koa-router');
const router = new KoaRouter({
    prefix: '/delivery'
});
const delivery = require('../handlers/delivery');

router.get('/history', delivery.getHistoryData);
router.post('/', delivery.countDelivery);

module.exports = router.middleware();