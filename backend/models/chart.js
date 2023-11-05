const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    

    month:{
        type:Number,
        
    },
    products:{
        type:Number,
    },
    categorys:{
        type:Number,
    },
    users:{
        type:Number,
    },
    orders:{
        type:Number,
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Chart', chartSchema);
