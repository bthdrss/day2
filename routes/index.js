const express=require('express');
const Router =require('router')
const passport=require('passport');

const router = Router()


router.get('/',(req,res)=>{
    res.render('index/welcome');
});

router.get('/dashboard',(req,res)=>{
    res.send('dashboard page');
});
module.exports=router;