const mongoose = require('../db/mongoose');

const TruckInfoSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        minlength: 1,
    },
    trucks: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const TruckInfo = mongoose.model('TruckInfo', TruckInfoSchema);

module.exports = TruckInfo;