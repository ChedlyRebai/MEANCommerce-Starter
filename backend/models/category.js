require('../database/connection')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    }

});

module.exports = mongoose.model("Category", categorySchema);