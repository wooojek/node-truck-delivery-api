const countMinTrucks = require('../lib/countMinTrucks');
const uuid = require('uuid/v4');

module.exports = async (ctx) => {
    const packageData = ctx.request.body.data;
    let trucks = countMinTrucks(packageData, 1000);
    let price = 0;

    trucks = trucks.map((load) => {
        price += load.reduce((acc, package) => {
            let singlePrice = package.weight > 400 ? (2 + 0.005 * package.weight) : (0.01 * package.weight);
            return acc + singlePrice;
        }, 0);

        return {
            load,
            truckID: uuid(),
        }
    });

    ctx.body = {
        price,
        trucks
    };
}