const express=require('express')
const { Router } = require('express')
const router=express.Router()

const Order=require('../models/order')


router.get('/getAllOrders', async (req, res) => {
    try {
         Order.find({}).then(
          (data)=>{
            res.status(200).send(data)
          }
         )   
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const orders = await Order.findById({_id:req.params.id});
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/create',async (req, res) => {
    let order = new Order(req.body); 
    //order.total = req.body.price * req.body.quantity
    await order.save()
      .then(data => {       
        res.status(200).json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      }); 
  });

router.delete('/:id', (req, res) => {
    Order.findByIdAndDelete({_id:req.params.id})
      .then(() => {
        res.json({ message: 'Order deleted successfully' });
      })
      .catch(error => {
        res.status(400).json(error);
      });
  });

  module.exports=router