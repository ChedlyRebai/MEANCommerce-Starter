const express=require('express')
const { Router } = require('express')
const router=express.Router()
const Product=require('../models/product')
const multer=require('multer')

let filename='';

const mystorage=multer.diskStorage({
    destination: './uploads',
    filename:(req,file,redirect)=>{
        let date=Date.now();
        let f1=date+'.'+file.mimetype.split('/')[1];
        redirect(null,f1);
        filename=f1;
    }
})

const upload=multer({storage:mystorage})

router.post('/create', upload.any('image') ,(req, res) => {
    let product = new Product(req.body);
    product.image=filename;
    product.save()
      .then(data => {       
        res.status(201).json(data);
      })
      .catch(error => {
        res.status(400).json(error);
      }); 
  });


router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json({ message: 'Product deleted successfully' });
      })
      .catch(error => {
        res.status(400).json(error);
      });
  });

/*
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.json(data);
        }
      })
      .catch(error => {res.status(400).json(error);}
    );
});*/

router.get('/:slug' ,async (req,res)=>{
  Product.findOne({slug:req.params.slug})
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.json(data);
        }
      })
      .catch(error => {res.status(400).json(error);}
    );
})


router.get('/', (req, res) => {
    Product.find()
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.json(data);
        }
      })
      .catch(error => {
        res.status(400).json(error);
      });
});


router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.json(data);
        }
      })
      .catch(error => {
        res.status(400).json(error);
      });
});


// search?category=lapin
router.get('/search/name/:name', (req,res) => {
  const name = req.params.name;  
   Product.find({name: name}).then(data => {res.json(data)})
     .catch(error => {
       res.status(400).json(error)
     })
});


router.get('/search/categ/:categ', (req,res) => {
    const category = req.params.categ;  
     Product.find({category: category}).then(data => {res.json(data)})
       .catch(error => {
         res.status(400).json(error)
       })
});
    
module.exports=router