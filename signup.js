import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";


const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/index.html");
});


app.post("/check",(req,res)=>{

      res.sendFile(__dirname+"/views/signup.html");
    
  });
  
  
  
  
  
  app.listen(port,()=>{
   console.log("server is listening in port " +port);
  });