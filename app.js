const express=require("express");
const path=require("path");
const app=express();

const staticpath=path.join(__dirname);
app.use(express.static(staticpath));







app.listen(3000,()=>{
    console.log("Port is started at 3000");
})