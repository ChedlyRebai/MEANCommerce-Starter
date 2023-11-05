const express=require('express')
const { Router } = require('express')
const router=express.Router()

const Category=require('../models/category')

router.get('/getAll', async (req, res) => {
    try {
        const category = await Category.find({});
        res.send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/getByid/:id', async (req, res) => {
    try {
        const category = await Category.findById({_id:req.params.id})
        res.send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        let data=req.body
        const category = await Category.findByIdAndUpdate({_id:req.params.id},data)
        res.send(category);
    } catch (error) {
        res.status(400).send(error);
    }
});



router.post('/create',(req, res) => {
    let category = new Category(req.body);
   
    category.save()
      .then(data => {       
        res.status(201).json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      }); 
  });


router.delete('/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json({ message: 'Product deleted successfully' });
      })
      .catch(error => {
        res.status(400).json(error);
      });
  });



module.exports=router