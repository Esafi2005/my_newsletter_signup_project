
const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){

  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

console.log(firstName, lastName, email);

})

//response.send();





app.listen(3006, function(res) {
  console.log("Newsletter-Signup Server is running on port 3005")
})
