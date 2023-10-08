const express = require("express")
const routes = express.Router()
const Detail = require("../models/detail")
const Slider = require("../models/slider")
const Service = require("../models/service")
const Contact = require("../models/contact")



routes.get('/',async (req,res)=>{
    const details =await Detail.findOne({"_id": "651799e479c665b15cc86b78"})
    const slides = await Slider.find()
    const services = await Service.find()
    // console.log(details)
    res.render("index", {details:details,
        slides:slides,
        services:services,
    })
  
})

routes.get('/gallery',async (req,res)=>{
    const details =await Detail.findOne({"_id": "651799e479c665b15cc86b78"})
    res.render("gallery" , {details:details})
})

routes.post('/process-contact-form',async (req,res)=>{
    console.log("form is submitted")
    console.log(req.body)
    try{
        const data = Contact.create(req.body)
        console.log(data)
        res.redirect('/')

    }
    catch(e){
        console.log(e)
        res.redirect('/')
    }
})

module.exports = routes