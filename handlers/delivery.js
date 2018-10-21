const countMinTrucks = require('../lib/countMinTrucks');
const uuid = require('uuid/v4');
const TruckInfo = require('../models/truckinfo');

class Delivery {
    static async countDelivery(ctx) {
        const packageData = ctx.request.body.data;
        let trucks = countMinTrucks(packageData, 1000);
        let price = 0;

        trucks = trucks.map((load) => {
            price += load.reduce((acc, cargo) => {
                let singlePrice = cargo.weight > 400 ? (2 + 0.005 * cargo.weight) : (0.01 * cargo.weight);
                return acc + singlePrice;
            }, 0);

            return {
                load,
                truckID: uuid(),
            }
        });

        let response = {
            price,
            trucks
        };

        const info = new TruckInfo(response);
        await info.save().then((doc) => {
            ctx.body = doc;
        }, (e) => {
            ctx.status = 400;
            ctx.body = e;
        });
    }

    static async getHistoryData(ctx) {
        await TruckInfo.find({}).then((history) => {
            ctx.body = history;
        }, (e) => {
            ctx.status = 400;
            ctx.body = e;
        });
    }
}

module.exports = Delivery;