const express=require('express');
const router=express.Router();
const Quote=require('../models/quotes')

router.post("/add",async(req,res)=>{
    const quote=new Quote(req.body);
    const result=await quote.save();
    if(result){
        return res.send({"result":"success"})
    } else{
        return res.status(422).send("some error occured")
    }


})


router.get("/getall",async(req,res)=>{
    const result=await Quote.find()
    if(result){
        return res.send(result)
    }else{
        return res.status(422).send("result not found")
    }
})
module.exports=router;

