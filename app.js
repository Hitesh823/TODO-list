const express=require("express");
const bpdyparser=require("body-parser");


var app=express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema=new mongoose.Schema({
    name:String
});
const item=mongoose.model("task",trySchema);
const todo=new item({
    name:"Create some videos"
});
todo.save();





