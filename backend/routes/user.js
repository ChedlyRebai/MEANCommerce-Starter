const express=require('express')
const { Router } = require('express')
const router=express.Router()
const Product=require('../models/product')
const User=require('../models/user')
const bcrypt=require('bcrypt')
const Cart=require('../models/cart')
const jwt=require('jsonwebtoken')
require('dotenv').config()




const secretKey = "secretKey";

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send({
      message: "No token provided."
    });
  }

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(401).send({
        message: "Failed to authenticate token."
      });
    }
    req.userId = decoded.id;
    next();
  });
}



router.post('/register', async (req,res)=>{

  User.findOne({email: req.body.email}).then((user) => {
    if (user) {
      
      res.status(400).send("email existe déjà" );
    } 
    else{
      // handle creating new user logic
    data=req.body;
    let user=new User(data)
    let salt=bcrypt.genSaltSync(10);
    user.password=bcrypt.hashSync(data.password , salt)
    user.save().then(
        async (userSaved)=>{
            console.log(userSaved);
            /*let cart = new Cart({
                user: req.body._id
            });
            await cart.save()*/
        }
    ).catch(
        (error)=>{
            res.send(error)
        }
    )


      
    }
  });
    
    
    
    
})


/* router.post('/login',async (req,res)=>{
    let data=req.body
    User.findOne({email:data.email}).then(
        async (user)=>{
          if(!user){
            res.send({message:'email or password invalid'})
          }

          let valid=await bcrypt.compareSync(data.password, user.password);
          if(!valid){
            res.send({message:'email or password invalid'})
          }
          console.log(data.password)
          if(valid){
            let payload={
                _id:user._id,
                fullname:`${user.name}  ${user.lastname}`,
                role:user.role
            }

            let token=jwt.sign(payload,'secret')

            res.send({token:token})
          }  
        }
    )
})  */

router.post('/login', (req, res) => {
    let data = req.body;
  
    User.findOne({ email: data.email })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ message: 'e-mail ou le mot de passe est invalide' });
        }
  
        bcrypt.compare(data.password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ message: 'Erreur lors de la comparaison des mots de passe' });
          }

          if (!isMatch) {
            return res.status(400).json({ message: 'e-mail ou le mot de passe est invalide' });
          }
  
          let payload = {
       
            _id: user._id,
            fullname: `${user.name} ${user.lastname}`,
            email: user ,
            role: user.role,
          };
          console.log()
  
          let secret = 'secret';
          if (!secret) {
            return res.status(500).json({ message: 'JWT secret is not defined' });
          }
  
          jwt.sign(payload, secret, {}, (err, token) => {
            if (err) {
              return res.status(500).json({ message: 'Error while generating JWT' });
            }
            res.json({ token });
          });
        });
      })
      .catch((err) => {
        return res.status(500).json({ message: 'Error while finding the user' });
      });
  });
  

router.get('/',(req,res)=>{
    User.find({}).then(
        (data)=>{
            res.status(200).send(data)
        }
    ).catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
})

router.get('/:id',(req,res)=>{
    User.findById(req.params.id).then(
        (data)=>{
            res.status(200).send(data)
        }
    ).catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
})


router.put('/upt/:id',async (req,res,)=>{
  try {
     let data=req.body
     
     updated=await User.findByIdAndUpdate({_id:req.params.id},data)
     res.send(updated)
  } catch (error) {
    res.send(error)
  }
})

router.patch('upt/:id', (req, res) => {
    let data = req.body;
    User.findById(req.params.id).then(user => {
      if (!user) {
        res.status(400).send('user not found');
      } else {
        if (data.password) {
          let salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(data.password, salt);
        }
        User.findByIdAndUpdate({_id:req.params.id},data ).then(
          (updatedUser) => {
            if (!updatedUser) {
              res.status(500).send('Error updating user');
            } else {
              res.send(updatedUser);
            }
          }
        );
      }
    });
  });
  

router.delete('/:id',(req,res)=>{
    User.findByIdAndDelete({_id:req.params.id}).then(
        (data)=>{
            Cart.find({user:req.params.id}).then(
                (CartCourant)=>{
                    Cart.deleteOne({user:req.params.id}).then(
                        (deletedcart)=> res.status(200).send(deletedcart)
                    )
                }
            )
            //res.status(200).send(data)
        }
    ).catch(
        (error)=>{
            res.status(400).send(error)
        }
    )
})

module.exports=router