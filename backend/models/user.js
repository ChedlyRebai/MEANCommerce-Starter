require('../database/connection')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;
const id = new ObjectId();

var userSchema = new Schema({
    
    name: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    createdAt: { 
        type: Date,
        default: Date.now 
    },

    role:{
        type:String,     
        default:"user"
    }
});

module.exports = mongoose.model("User", userSchema);