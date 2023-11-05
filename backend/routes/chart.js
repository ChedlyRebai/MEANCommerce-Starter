const express=require('express')
const { Router } = require('express')
const chart = require('../models/chart')
const router=express.Router()

const Chart=require('../models/chart')


router.get('/getAll',async (req,res)=>{
    try {
        const charts = await Chart.find({}).sort({_id:-1}) ;
        res.send(charts);
    } catch (error) {
        res.status(400).send(error)
    }
})
  
router.post('/create',async (req,res)=>{
    try {
        let data= new chart(req.body)
        data.save().then((data)=>{
            res.status(200).send(data)
        })
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports=router


