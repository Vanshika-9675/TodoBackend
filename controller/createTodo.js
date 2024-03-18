const Todo = require("../models/todo");

exports.createTodo = async(req,res)=>{
    try{
         const {title, description} = req.body;
         const response =  await  Todo.create({title,description});
         if(!title || !description){
           console.log("Enter details carefully!!");
           return  res.status(422).json({
                success:false,
                message:"Enter details carefully!"
            })
         }
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created successfully"
        })
        console.log("Entry created successfully");
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }
}