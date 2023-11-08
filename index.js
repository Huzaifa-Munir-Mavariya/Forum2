const express = require("express");
const Categories = require("./database");
const Question = require("./questions");
const Answer = require("./answers");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

app.get("/", async (req,res)=>{
    const categ = await Categories.find({});
    res.render("index",{
        Category:categ
    });
})

app.get("/questions/:id", async (req,res) => {
    const {id} = req.params;
    
    const category = await Categories.findById({_id:id});
    const question = await Question.find({category:category.name});
    res.render("questions", {
        Category:category,
        Question:question
    })
})

app.post("/questions", async (req,res) => {
    try{
    const question = new Question({
        title:req.body.title,
        description:req.body.description,
        category:req.body.category
    }) 
    const addData = await question.save();
    res.redirect("/")
    }
    catch(e){
        console.log(e);
    }
    
})

app.get("/thread/:id", async (req,res) => {
    const {id} = req.params;
    const answer = await Question.findById({_id:id});

    res.render("threads",{
        Answer1:answer
    });

})



app.listen(port,()=>{
console.log("Listening to port no "+8000)
})