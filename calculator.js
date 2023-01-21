const express=require("express");
const app=express();


app.use(express.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req, res){
    
    var n1=+(req.body.num1);
    var n2=+(req.body.num2);
    var resu=n1+n2;
    res.send("The result after calculation is : "+resu);
});

app.get("/bmi_calc",function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmi_calc",function(req, res){
    
    var n1=+(req.body.weight);
    var n2=+(req.body.height);
    var resu=n1/(n2*n2);
    res.send("Your BMI is "+resu);
});

app.listen(process.env.PORT ||3000,function(){
    console.log("Server started on port 3000.")
});