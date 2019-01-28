const express = require("express")
const app = express()

var port = process.env.PORT || 3000
var data = {}

app.get("/:status",function(req,res){
    data = {
        status:req.params.status,
        id:123
    }
    res.redirect("/")
})

app.get("/",function(req,res){
    res.send(data)
})

app.listen(port,function(){
    console.log("Server is running")
})