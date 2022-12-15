const express=require('express');
const {testRouter}=require("./routers/test.router")
const app=express();

app.use("/testing",testRouter);
app.listen(3000,()=>{
    console.log("server running");
})