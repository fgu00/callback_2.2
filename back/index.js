var express = require("express");
var apiServer = express();
var cors = require("cors");
apiServer.use(cors());
var fs=

var host = "localhost";
var port = 3000;

apiServer.listen(port, host, () => {
  console.log("Server partito: http://%s:%d/", host, port);
});

apiServer.get("/api/login", (req, res) => {
  console.log("ricevuti:", req.query.mail, req.query.password);
  fs.readFile("user.json",(err,data)=>{
    if(err){
      console.log(err);
      res.status(500).json({message: "login effettuato"});
    }else{
      var users=JSON.parse(data);
      if(a.mail===req.query.mail && a.password===req.query.password){
        res.status(200).json({"message":"login effettuato"});
        login=true;
        return 
    }
};
if(!login) res.status(400).json({message: "login fallito"});
  }
);
});
apiServer.get("/api/user",(req,res)=>{
console.log("ricevuti: ",req.query.mail,req.query.password);
fs.readFile("user.json",(err,data)=>{
  if(err){
    console.log(err);
  }else{
    var user=JSON.parse(data);
    user.forEach((a) => {
      if(
      a.mail===req.query.mail && a.password===req.query.password
      ){
        res.status(200).json({message: "login effettuato"});
      }else{
        res.status(400).json({message: "login fallito"});
      }
    });
  }
})
});
apiServer.get("/api/register",(req,res)=>{
  console.log("ricevuti",req.query.mail,req.query.password);
fs.readFile("user.json",(err,data)=>{
  if(err){
    console.log(err);
    res.status(500).json({message:"errore generico"});
  }else{
    var users=JSON.
  }
});
