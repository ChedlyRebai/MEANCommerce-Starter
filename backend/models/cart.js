const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        image:{type:String},
        price:{type:Number},
        category:{type:String},
        name:{type:String},
        quantity: { type: Number, default: 1 }
    }],
    itemsnumber: {type:Number,default:0},
    user: { type: mongoose.Schema.Types.ObjectId,ref:'User' },
    total: { type: Number},
});

module.exports = mongoose.model('Cart', cartSchema);
