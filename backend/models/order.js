const mongoose = require('mongoose');
const Cart=require('./cart')
const orderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:'User'},
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        image:{type:String},
        price:{type:Number},
        category:{type:String},
        name:{type:String},
        quantity: { type: Number, default: 1 }
    }],
    ntlf:{type:Number},
    nom:{type:String},
    prenom:{type:String},
    email:{type:String},
    pays:{type:String},
    adresse:{type:String},
    ville:{type:String},
    etat:{type:String},
    code:{type:Number},
    total:{type:Number},
    montant:{type:Number},
    createdAt: { type: Date,default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);

// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
//     items: [{
//         product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//         quantity: { type: Number, default: 1 },
//         price: { type: Number }
//     }],
//     nom:{type:String},
//         prenom:{type:String},
//         email:{type:String},
//         pays:{type:String},
//         adresse:{type:String},
//         ville:{type:String},
//         etat:{type:String},
//         code:{type:Number},
//     total: { type: Number },
//     createdAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// module.exports = Order;
