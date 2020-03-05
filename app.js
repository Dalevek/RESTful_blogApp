const bodyParser    = require("body-parser");
const express       = require("express");
const mongoose      = require("mongoose");

app = express();
mongoose.createConnection("mongodb://localhost:27017/restful_blogapp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});


app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Server is running!");
})