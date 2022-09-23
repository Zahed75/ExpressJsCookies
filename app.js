var express=require('express');

app=express();


//append data in header

app.get("/data_append",function (req,res){
    res.append("name","Zahed Hasan");
    res.append("contact","01611814937");
    res.append("company","Syscomatic Technologies");
    res.status(201).end("Successfully Added!")
})

// Set Cookies

app.get("/seven",function (req,res){
    res.cookie("name","Zahed Hasan");
    res.cookie("contact","01611814937");
    res.cookie("company","Syscomatic Technologies");
    res.status(201).end("Cookie Send Successfully!")
})



// Clear Cookies

app.get("/eight",function (req,res){
   res.clearCookie('contact');
    res.status(201).end("Cookie Clear Successfully!")
})



//Redirect Response
app.get("/bangladesh",function (req,res){
    res.redirect("http://localhost:8000/pak")
});

app.get("/pak",function (req,res){
    res.send("We were a brother !")
})


//Download Response

app.get("/dow",function (req,res){
    res.download("./uploads/DevOps.jpg");
})




app.listen(8000,function (){
    console.log("Server Run Successfully");
})