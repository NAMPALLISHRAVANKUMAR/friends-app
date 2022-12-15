const testRouter=require('express').Router();

const testFun=(req,res,next)=>{
    console.log("test fun");
    if(true){
       return res.status(400).send("failed");
    }
    return next();
}
const testFun1=(req,res,next)=>{
    console.log("test fun1");
    return next();
}
const testActual=(req,res)=>{
    console.log("test actuall");
    res.send("hello ts");
}
testRouter.get('/test',[testFun,testFun1],testActual)

module.exports={testRouter}