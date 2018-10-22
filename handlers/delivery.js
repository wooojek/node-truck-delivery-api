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
            const { trucks, price, createdAt } = doc;
            ctx.body = {
                trucks,
                price,
                createdAt,
            };
        }, (e) => {
            ctx.status = 500;
        });
    }

    static async getHistoryData(ctx) {
        await TruckInfo.find({}).then((history) => {
            if (history.length > 0) {
                ctx.body = history;
            } else {
                ctx.status = 404;
            }
        }, (e) => {
            ctx.status = 500;
        });
    }
}

module.exports = Delivery;