const express=require('express')
const Product=require('./models/product')
const User=require('./models/user')
const Order=require('./models/order')
const app=express()
const mongoose=require('mongoose')
const productApi=require('./routes/products')
require('dotenv').config()
//process.env.varname
//Apis
const userApi=require('./routes/user')
const cartApi=require('./routes/cart')
const categoryApi=require('./routes/category')
const orderApi=require('./routes/order')
const chartApi=require('./routes/chart')


const bodyParser = require('body-parser');
var cors = require('cors')
const multer=require('multer')
require('./database/connection')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/getimage',express.static('./uploads'))


app.use('/products',productApi)
app.use('',userApi)
app.use('/order',orderApi)
app.use('/cart',cartApi)
app.use('/category',categoryApi)
app.use('/chart',chartApi)

const PORT=process.env.PORT
app.listen( PORT || 4000,()=>{
    console.log("port listen");
})