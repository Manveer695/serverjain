var express = require('express');
var bp = require('body-parser');

var app=express(); 

app.use(express.static('public'));
app.use(bp.urlencoded({
  extended: true
}));
app.use(bp.json());

app.post('/',function(req,res){
    console.log(req.body);
    console.log("yo");
    res.send("ho gya");
});


app.listen((process.env.PORT || 5000),function(){
    console.log("i am listening");
});

admdshksckl