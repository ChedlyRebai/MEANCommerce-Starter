require('../database/connection')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify=require('slugify')
const marked=require('marked')

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    description: { 
        type: String 
    },

    category: {
        type: String 
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String
    },

    createdAt: { 
        type: Date,
        default: Date.now 
    },

    slug:{
        type:String,     
        unique:true,
        require:true
    }
})

ProductSchema.pre('validate' ,function(next){
    if(this.name){
        this.slug=slugify(this.name,{lower:true ,strict:true})
    }
    next()
})

module.exports = mongoose.model('Product',ProductSchema)
