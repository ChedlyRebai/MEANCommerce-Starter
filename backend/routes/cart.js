const express=require('express')
const { Router } = require('express')
const router=express.Router()
const Product=require('../models/product')
const Cart=require('../models/cart')

router.post('/addToCart', async (req, res)=>{
    try {
        // Find the cart belonging to the user
        let cart = await Cart.findOne({ user: req.body._id });
        if (!cart) {
            cart = new Cart({
                user: req.body._id
            });
        }
        cart.itemsnumber++;
        // Check if the item is already in the cart
        const existingItem = cart.items.find(item => item.product.toString() === req.body.productId);
        
        if (existingItem) {
            // If the item is already in the cart, update the quantity
            existingItem.quantity += +req.body.quantity;
            console.log(typeof(req.body.quantity))            
            console.log(typeof(existingItem.quantity))            
        } else {
            // If the item is not in the cart, add it
            cart.items.push({ product: req.body.productId, quantity: req.body.quantity,name:req.body.name,image:req.body.image,category:req.body.category,price:req.body.price});   
        }
        cart.total += req.body.price * req.body.quantity
         //cart.total = cart.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
        // Save the updated cart to the database
        await cart.save();
        res.send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.delete('/:productId/:_id', async (req, res) => {
    
        try {
            const cart = await Cart.findOne({ user: req.params._id });
            const item = cart.items.find(i => i.product.toString() === req.params.productId);
            const newTotal = cart.total - (item.price*item.quantity);
            console.log(item)
            console.log(newTotal)
            const updatedCart = await Cart.findOneAndUpdate(
                { user: req.params._id },
                { $pull: { items: { product: req.params.productId } }, $set: { total: newTotal } },
                { new: true }
            );
            res.send(updatedCart);
        } catch (error) {
            res.status(400).send(error);
        }       
})


router.get('/getAllCards' , async (req, res, next) => {
        try {
            // Find all the carts
            const carts = await Cart.find({});
            res.send(carts);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    
router.get('/:id' , async (req, res, next) => {
        try {
            // Find all the carts
            const carts = await Cart.find({user:req.params.id})       
            res.send(carts);
        } catch (error) {
            res.status(400).send(error);
        }
    });
    

module.exports=router