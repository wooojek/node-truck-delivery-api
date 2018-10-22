const KoaRouter = require('koa-router');
const router = new KoaRouter({
    prefix: '/delivery'
});
const delivery = require('../handlers/delivery');

/**
 * @api {get} /delivery/history Request Truck Delivery Info history
 * @apiName GetHistoryData
 * @apiGroup Delivery
 *
 * @apiSuccess {Object[]} history       List of truck deliveries.
 * @apiSuccess {Object[]}   history.trucks   Trucks configurations.
 * @apiSuccess {Object[]}   history.trucks.load   Trucks load.
 * @apiSuccess {String}   history.trucks.load.id   Package id.
 * @apiSuccess {Number}   history.trucks.load.weight   Package weight.
 * @apiSuccess {String}   history.trucks.truckID   Truck id.
 * @apiSuccess {Number}   history.price Price for delivering configuration.
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  [
 *   {
 *       "trucks": [
 *           {
 *               "load": [
 *                   {
 *                       "id": "OTHER-ID-2",
 *                       "weight": 500
 *                   },
 *                   {
 *                       "id": "CLIENT-ID-3",
 *                       "weight": 300
 *                   }
 *               ],
 *               "truckID": "93d097b6-57ac-4083-b9a2-0eff0d60a952"
 *           }
 *       ],
 *       "_id": "5bcd7c4e2d8dc200154aa6e1",
 *       "price": 7.5,
 *       "createdAt": "2018-10-22T07:29:18.424Z",
 *       "__v": 0
 *   }
 *  ]
 * 
 * @apiError {String} 404 Not Found - Database is empty
 * @apiError {String} 500 Internal Server Error
 */
router.get('/history', delivery.getHistoryData);

/**
 * @api {post} /delivery Request Truck Delivery Calculation
 * @apiName CountDelivery
 * @apiGroup Delivery
 *
 * @apiSuccess {Object[]}   trucks   Trucks configuration.
 * @apiSuccess {Object[]}   trucks.load   Trucks load.
 * @apiSuccess {String}   trucks.load.id   Package id.
 * @apiSuccess {Number}   trucks.load.weight   Package weight.
 * @apiSuccess {String}   trucks.truckID   Truck id.
 * @apiSuccess {Number}   price Price for delivering configuration.
 * 
 * @apiError {String} 500 Internal Server Error
 * 
 * @apiParamExample {json} Request Body
 *  {
 *      "data": [
 *          { "id": "OTHER-ID-2", "weight": 500 },
 *          { "id": "CLIENT-ID-3", "weight": 300 }
 *      ]
 *  }
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "trucks": [
 *          {
 *              "load": [
 *                  {
 *                      "id": "OTHER-ID-2",
 *                      "weight": 500
 *                  },
 *                  {
 *                      "id": "CLIENT-ID-3",
 *                      "weight": 300
 *                  }
 *              ],
 *              "truckID": "f672a071-b68a-4f42-a207-4bb9682bbb00"
 *          }
 *      ],
 *      "price": 7.5,
 *      "createdAt": "2018-10-22T07:53:31.300Z"
 *  }
 */
router.post('/', delivery.countDelivery);

module.exports = router.middleware();