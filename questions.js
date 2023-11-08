//Connect Mongo db database
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Huzaifa:Afiazuh2006@forum.sn1gxse.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to the database");
}).catch((e)=>{
    console.log("Connection failed");
})

//Create a schema

const schema = new mongoose.Schema({
title:String,
description:String,
category:String
})

const Question = new mongoose.model("Question",schema);

module.exports = Question;