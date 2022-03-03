var express = require("express");
var apiServer = express();
var cors = require("cors");
apiServer.use(cors());
var fs = require("fs");
const { stringify } = require("querystring");
const mysql = require('mysql2');

var host = "localhost";
var port = 3000;
const connection = mysql.createConnection({
  host: 'russo.salvatore.tave.osd',
  user: 'c190_salvo',
  database: 'c190_primo',
  password: "Az-17694"
});

apiServer.listen(port, host, () => {
  console.log("Server partito: http://%s:%d/", host, port);
  connection.query(
    'SELECT * FROM c190_primo.users where email="salvatore" and password="russo"',
    function(results) {
      console.log(results[0].utennti>=1); 
      //sto loggando un array

    }
  );
});

apiServer.get("/api/login", (req, res) => {
  console.log("ricevuti:", req.query.mail, req.query.password);
  connection.query(
    'SELECT * FROM c190_primo.users where email="'+req.query.mail+'" and password="'+req.query.password+'"',
    function(results) {
      console.log(results[0].utennti>=1); 
      //sto loggando un array
      if(results[0].utennti>=1){
        res.status(200).json({ message: "login effettuato" });
      }else{
        res.status(400).json({ message: "login failed" });
      }

    }
  );
});

apiServer.get("/api/register", (req, res) => {
  console.log("ricevuti:", req.query.mail, req.query.password);
  connection.query(
    'insert into c190_primo.users(email,password) values("'+req.query.mail+'","'+req.query.password+'")',
    'SELECT * FROM c190_primo.users where email="'+req.query.mail+'" and password="'+req.query.password+'"',
    function(results) {
      console.log(results[0].utennti>=1); 
      //sto loggando un array
      if(results[0].utennti>=1){
        res.status(200).json({ message: "sign-up success" });
      }else{
        res.status(400).json({ message: "sign-up failed" });
      }

    }
  );
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "errore generico" });
    } else {
      var users = JSON.parse(data);
      users.push({ mail: req.query.mail, password: req.query.password });
      fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err) res.status(400).json({ message: "sign-up failed" });
        else res.status(200).json({ message: "sign-up success" });
      });
    }
  });
});