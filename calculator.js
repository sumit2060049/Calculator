const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


// app.get("/",function(req,res){
//     console.log(__dirname);
// })

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
// app.post("/",function(req,res){
//     //console.log(req.body);
//     console.log(req.body.num1);
//     res.send("Thanks for posting");
    
// })
app.post("/",function(req,res){
    //console.log(req.body);
    //console.log(req.body.num1);
    //res.send("Thanks for posting");
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var reasult=num1+num2;
    
    res.send("The reasult of calculation is "+reasult);
    
});

app.get("/bmiCalc",function(req,res){
    res.sendFile(__dirname+"/bmiCalc.html");
})
app.post("/bmiCalc",function(req,res){

    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var reasult=weight/(height*height);
    
    res.send("The reasult of BMI is "+reasult);
    
});



app.listen(3000,function(){
    console.log("server started on port 3000");
})
// app.get("/",function(req,res){
//     res.send("hello wod");
// })