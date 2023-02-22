const express = require('express');
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello api developer")
})

app.listen(8800,()=>{
    console.log("app listening@8800")
})