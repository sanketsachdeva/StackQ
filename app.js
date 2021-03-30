var express = require("express");
var app = express();
var port = 3000;
var mongoose = require('mongoose');

app.get("/", (req, res) => {
 res.send("Welcome to StackQ");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/StackQueue",{ useNewUrlParser: true, useUnifiedTopology: true });
app.use("/", (req, res) => {
console.log(__dirname);
 res.sendFile(__dirname + "/index.html");
});
var nameSchema = new mongoose.Schema({
 firstName: String,
 lastNameName: String
});
var User = mongoose.model("User", nameSchema);
app.post("/addname", (req, res) => {
 var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});
