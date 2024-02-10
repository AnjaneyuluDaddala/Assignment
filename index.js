import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";


const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var userAuthorized=false;
function login(req,res,next) {
  const user=req.body["user"];
  const password=req.body["password"];

  if (user==="anjan" && password==="1234") {
     userAuthorized=true;
  }
  next();
  
}

app.use(login);

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/index.html");
});



app.post("/submit",(req,res)=>{

  if (userAuthorized) {
     res.sendFile(__dirname+"/views/home.html");
  }else{
   
    res.sendFile(__dirname+"/views/index.html");
  }
  
});





app.listen(port,()=>{
 console.log("server is listening in port " +port);
});
